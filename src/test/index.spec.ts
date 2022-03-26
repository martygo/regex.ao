import { removeAccents, removeNumber, allowNumber, isURL, emailValidator } from "../index";

/* TODO: Create other test cases for certain functions */

describe("Test all regex in readme", () => {
    test("Remove accents from strings", () => {
        let received = "Maçãs";
        let expected = "Macas";

        expect(removeAccents(received)).toBe(expected);
    });

    test("remove numbers in strings", () => {
        let received = "sonicboom3";
        let expected = "sonicboom";

        expect(removeNumber(received)).toBe(expected);
    });

    test("Only allow numbers", () => {
        let received = "230";

        expect(allowNumber(received)).toBeTruthy()
    });

    test("Check if it's URL", () => {
        let received = "https://github.com/martygo";

        expect(isURL(received)).toBeTruthy()
    });
});

describe("Test regex email", () => {
    test("Check if an email is valid", () => {
        let received = "vodu@gmail.com";

        expect(emailValidator(received)).toBeTruthy()
    });

    test("Check if an email is not valid", () => {
        let received = "me#gmail.com";

        expect(emailValidator(received)).toBeFalsy()
    });
})