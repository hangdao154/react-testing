import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

/**
 * * NOTES: Priority Order for Queries:
 *  1. getByRole
 *  2. getByLabelText (for form fields)
 *  3. getByPlaceholderText
 *  4. getByText (for non-interactive elements: divs, paragraphs, spans, etc.)
 *  5. getByDisplayValue (for form element values)
 *  6. getByAltText (for images)
 *  7. getByTitle (for elements with a title attribute: some screen readers cannot read this attribute)
 *  8. getByTestId (for custom elements, users cannot see this attribute but it can be used by testing libraries)
 */

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);

        const pageHeading = screen.getByRole("heading", { level: 1 })
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", { level: 2 })
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument();

        const paragraphElement2 = screen.getByText(/^all fields are mandatory$/i);
        expect(paragraphElement2).toBeInTheDocument();

        const paragraphElement3 = screen.getByText((content) => content.startsWith("All fields are mandatory"));
        expect(paragraphElement3).toBeInTheDocument();

        const closeElement = screen.getByTitle("close")
        expect(closeElement).toBeInTheDocument();

        const imageElement = screen.getByAltText("a person with a laptop")
        expect(imageElement).toBeInTheDocument();

        const customElement = screen.getByTestId("custom-element")
        expect(customElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", { name: "Name" })
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name", { selector: "input" })
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("John Doe")
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", { name: "Bio" })
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement2).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button")
        expect(submitButtonElement).toBeInTheDocument();

    })
})