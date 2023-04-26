import axios from "axios";
const config = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
    },
};

export const getAllContactApi = async () => {
    try {
        const { data } = await axios.get(
            "https://contact.mediusware.com/api/contacts/"
        );
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getUsContactApi = async () => {
    const { data } = await axios.get(
        "https://contact.mediusware.com/api/country-contacts/United States/"
    );
    return data.results;
};
