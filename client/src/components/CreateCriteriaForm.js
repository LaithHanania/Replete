import React from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Button, Grid } from "@material-ui/core";
import { postCriteria, updateCriteria } from "repository/index";
import Proptypes from "prop-types";

const CreateCriteriaForm = ({
  criteria,
  onCancel,
  onSubmit,
  editingInitialValues,
  selectedId,
}) => {
  const onFormSubmit = async (values) => {
    if (selectedId) {
      await updateCriteria(values, selectedId);
    } else {
      await postCriteria(values);
    }
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
    } else if (values.weight < 0 || values.weight > 10) {
      errors.weight = "Value must be a number between 0 and 10";
    }

    if (
      !(editingInitialValues?.label === values.label) &&
      criteria.some((criterion) => criterion.label === values.label)
    ) {
      errors.label = "Name must be unique";
    }

    return errors;
  };

  return (
    <div>
      <Form
        initialValues={editingInitialValues ?? null}
        onSubmit={onFormSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, form }) => (
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
  editingInitialValues: Proptypes.shape({
    label: Proptypes.string,
    weight: Proptypes.number,
    description: Proptypes.string,
  }),
  selectedId: Proptypes.string,
};

export default CreateCriteriaForm;
