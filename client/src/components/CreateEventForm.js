import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { TextField } from "final-form-material-ui";
import { DatePicker } from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import PrimaryButton from "../commonComponents/PrimaryButton";
import { Grid, Button, Box } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { postEvent } from "../repository/index";

const CreateEventForm = ({ onCancel, onSubmit, criteria }) => {
  const onFormSubmit = async (values) => {
    console.log("values", values);
    const resp = await postEvent(values);
    onSubmit();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.label) {
      errors.label = "Event must have name";
    }

    if (!values.date) {
      errors.date = "Must enter event date";
    }

    return errors;
  };

  const valueValidation = (value) => isNaN(value) ?? "Value must be a number";

  return (
    <div style={{ overflow: "visible" }}>
      <Form
        onSubmit={onFormSubmit}
        onCancel={onCancel}
        mutators={{
          ...arrayMutators,
        }}
        initialValues={{
          eventCriterias: criteria,
        }}
        validate={validate}
        render={({
          handleSubmit,
          form: {
            mutators: { push },
          },
          pristine,
          form,
          submitting,
          values,
        }) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    name="label"
                    placeholder="Event Name"
                    component={TextField}
                    label="Event Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    name="date"
                    label="Event Date"
                    dateFunsUtils={DateFnsUtils}
                    format="MM/dd/yyyy"
                  />
                </Grid>
              </Grid>
              <div>
                <Field
                  name="description"
                  component={TextField}
                  placeholder="Description"
                  label="Description"
                  fullWidth
                />
              </div>
              <Box paddingTop={2}>
                <FieldArray name="eventCriterias">
                  {({ fields }) =>
                    fields.map((name, index) => (
                      <div key={name}>
                        <Grid container alignItems="flex-start" spacing={2}>
                          <Grid item>
                            <Field
                              name={`${name}.label`}
                              component={TextField}
                              placeholder="Criteria"
                            />
                          </Grid>
                          <Grid item>
                            <Field
                              name={`${name}.value`}
                              component={TextField}
                              placeholder="Value"
                              validate={valueValidation}
                            />
                          </Grid>
                          <Grid item>
                            <span
                              onClick={() => fields.remove(index)}
                              style={{ cursor: "pointer" }}
                            >
                              <DeleteIcon />
                            </span>
                          </Grid>
                        </Grid>
                      </div>
                    ))
                  }
                </FieldArray>
              </Box>
              <div className="buttons">
                <Box paddingTop={1}>
                  <PrimaryButton
                    text="Add Criteria"
                    onClick={() => push("criterias", undefined)}
                  >
                    Add Criteria
                  </PrimaryButton>
                </Box>
              </div>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button onClick={onCancel} type="button" color="secondary">
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="button"
                    onClick={() => {
                      form.reset();
                    }}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          );
        }}
      />
    </div>
  );
};

export default CreateEventForm;
