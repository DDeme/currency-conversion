import {
  FieldValues,
  useController,
  UseControllerProps,
  UseControllerReturn,
} from "react-hook-form";
import type { RenderProp } from "react-render-prop-type";
import {
  Flex,
  FormControl,
  FormControlOptions,
  FormErrorMessage,
  FormLabel,
  Spacer,
} from "@chakra-ui/react";

export type FormFieldProps<T extends FieldValues> = Pick<
  FormControlOptions,
  "isDisabled" | "isRequired"
> &
  UseControllerProps<T> & {
    label?: string;
  };

export const FormField = <FormValues extends FieldValues>({
  label,
  isDisabled = false,
  isRequired = false,
  children,
  ...props
}: FormFieldProps<FormValues> &
  RenderProp<UseControllerReturn<FormValues>>) => {
  const controller = useController<FormValues>(props);

  return (
    <FormControl
      isInvalid={!!controller.fieldState?.error}
      isDisabled={isDisabled}
      isRequired={isRequired}
    >
      {label ? (
        <>
          <Flex
            alignItems={{ md: "center" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex flex="auto" maxWidth={{ md: "3xs" }}>
              <FormLabel m={0}>{label}</FormLabel>
            </Flex>
            <Flex flex="1">{children(controller)}</Flex>
          </Flex>
          <Flex>
            <Spacer maxWidth={{ base: 0, md: "3xs" }} />
            <FormErrorMessage as={Flex} flex="1">
              {controller.fieldState.error?.message}
            </FormErrorMessage>
          </Flex>
        </>
      ) : (
        <>
          {children(controller)}
          <FormErrorMessage as={Flex} flex="1">
            {controller.fieldState.error?.message}
          </FormErrorMessage>
        </>
      )}
    </FormControl>
  );
};
