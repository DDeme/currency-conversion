import { FieldValues } from "react-hook-form";
import { FormField, FormFieldProps } from "../../../form-field";
import { CurrencySelect } from "../../inputs/currency-select/CurrencySelect";

export const CurrencySelectField = <FormValues extends FieldValues>(
  props: FormFieldProps<FormValues>
) => (
  <FormField {...props}>
    {({ field }) => <CurrencySelect {...field} />}
  </FormField>
);
