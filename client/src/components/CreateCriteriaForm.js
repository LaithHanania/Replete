import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Button, Grid } from "@material-ui/core";
import { postCriteria } from "../repository/index";
import Proptypes from "prop-types";

const CreateCriteriaForm = ({ criteria, onCancel, onSubmit }) => {
  const onFormSubmit = async (values) => {
    const resp = await postCriteria(values);
    onSubmit();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.label) {
      errors.label = "Required";
    }

    if (!values.weight) {
      errors.weight = "required";
    } else if (isNaN(values.weight)) {
      errors.weight = "Value must be a number";
    } else if (values.weight < 0) {
      errors.weight = "Value must be a positive number";
    }

    if (criteria.some((criterion) => criterion.label === values.label)) {
      errors.label = "Name must be unique";
    }

    return errors;
  };

  return (
    <div>
      <Form
        onSubmit={onFormSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, values, form }) => (
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <Field
                  required
                  name="label"
                  component={TextField}
                  type="text"
                  label="Criteria Name"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  InputProps={{ inputProps: { min: 0, max: 10 } }}
                  required
                  name="weight"
                  component={TextField}
                  type="number"
                  label="Weight"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="description"
                  component={TextField}
                  type="text"
                  label="Description"
                />
              </Grid>
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
                  <Button color="primary" type="submit" disabled={submitting}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  );
};

CreateCriteriaForm.propTypes = {
  criteria: Proptypes.array,
  onCancel: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default CreateCriteriaForm;
