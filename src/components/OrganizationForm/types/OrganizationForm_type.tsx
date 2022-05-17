type OrganizationFormProps = {
    orgName: string;
    orgRepo: string;
    handleInputsChange: Function;
    submit: Function,
    error: string | null
}