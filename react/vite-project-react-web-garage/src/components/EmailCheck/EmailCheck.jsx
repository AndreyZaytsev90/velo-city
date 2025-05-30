export const EmailCheck = () => {
    const email = 'zayac_1990@mail.com'
    const emailRegex = /^(?!\.)([a-zA-Z0-9._-]+)(?<!\.)@(?!\.)([a-zA-Z0-9.-]+)(?<!\.)\.[a-zA-Z]{2,}$/;
    const check = emailRegex.test(email);
    return check ? email : null
};

