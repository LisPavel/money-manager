import { useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
    const [formData, setFormData] = useState(initialState ?? {});
    const handleChange = ({ name, value }) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();
        onSubmit?.(formData);
    };
    return { formData, handleChange, handleSubmit };
};

export default useForm;
