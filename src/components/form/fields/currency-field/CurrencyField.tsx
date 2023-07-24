import { FieldValues } from "react-hook-form";
import { FormField, FormFieldProps } from "../../../form-field";
import { CurrencyInput } from "../../inputs/currency-input/CurrencyInput";

export const CurrencyField = <FormValues extends FieldValues>(
  props: FormFieldProps<FormValues>
) => (
  <FormField {...props}>
    {({ field }) => <CurrencyInput {...field} />}
  </FormField>
);
