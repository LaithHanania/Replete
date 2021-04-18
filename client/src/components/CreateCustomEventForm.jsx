import React, { useEffect, useCallback, useState } from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { TextField } from "final-form-material-ui";
import PrimaryButton from "commonComponents/PrimaryButton";
import { Grid, Button, Box } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { postCustomEvent } from "repository/index";
import Proptypes from "prop-types";
import { getCriteria } from "repository/index";
import CircularProgress from "@material-ui/core/CircularProgress";

const CreateCustomEventForm = ({ onCancel, onSubmit }) => {
  const [criteria, setCriteria] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCriteria = useCallback(async () => {
    const resp = await getCriteria();
    setCriteria(resp);
    setIsLoading(false);
  }, [getCriteria]);

  useEffect(() => {
    fetchCriteria();
  }, [fetchCriteria]);

  const onFormSubmit = async (values) => {
    await postCustomEvent(values);
    onSubmit();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.label) {
      errors.label = "Event must have name";
    }

    return errors;
  };

  const valueValidation = (value) => isNaN(value) ?? "Value must be a number";

  const initialCriterias = criteria?.map((criterion) => ({
    ...criterion,
    value: 0,
  }));

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div style={{ overflow: "visible" }}>
      <Form
        onSubmit={onFormSubmit}
        onCancel={onCancel}
        mutators={{
          ...arrayMutators,
        }}
        initialValues={{
          eventCriterias: initialCriterias,
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
        }) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems="flex-start">
                <Field
                  name="label"
                  placeholder="Event Name"
                  component={TextField}
                  label="Event Name"
                  fullWidth
                />
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
                    onClick={() => push("eventCriterias", undefined)}
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

CreateCustomEventForm.propTypes = {
  onCancel: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default CreateCustomEventForm;
