import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import { getTransactionById } from "../../../store/transactions";
import useForm from "../../../hooks/useForm";
import CardWrapper from "../../common/CardWrapper";
import TextField from "../../common/form/textField";
import NumberInput from "../../common/form/numberField";
import DateField from "../../common/form/dateField";

const TransactionPage = () => {
    const { id } = useParams();
    const transaction = useSelector(getTransactionById(id));
    console.log(id);
    // const transactiio
    const { formData, handleChange, handleSubmit } = useForm({
        initialState: transaction,
        onSubmit: (data) => {},
    });

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    // console.log(formData);
    function handleDateChange({ name, value }) {
        handleChange({ name, value: Date.parse(value) });
    }

    return (
        <CardWrapper>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Description"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                />
                <NumberInput
                    label="Amount"
                    name="amount"
                    onChange={handleChange}
                    value={formData.amount}
                    type={"float"}
                />
                <DateField
                    label="Date"
                    name="date"
                    onChange={handleDateChange}
                    value={new DateTime(formData.date).toFormat("yyyy-MM-dd")}
                />
            </form>
        </CardWrapper>
    );
};

export default TransactionPage;
