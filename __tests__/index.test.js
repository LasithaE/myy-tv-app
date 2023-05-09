import { render } from "@testing-library/react";
import Home from "../src/pages/index";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import AllShows from "@/pages/shows/all";

jest.mock("next/router");

describe("Home", () => {
  it("shows and people list", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("shows")).toBeInTheDocument();
    expect(getByTestId("people")).toBeInTheDocument();
  });
});
describe("AllShows", () => {
  it("check if carousels work", () => {
    const allShows = [
      {
        id: 1,
        title: "Show 1",
        genres: ["Genre 1", "Genre 2"],
        image: { original: "image-url" },
        rating: { average: 8 },
      },
      {
        id: 2,
        title: "Show 2",
        genres: ["Genre 3", "Genre 4"],
        image: { original: "image-url" },
        rating: { average: 7 },
      },
    ];
    const { getByTestId } = render(
      <Provider store={store}>
        <AllShows allShows={allShows} />
      </Provider>
    );
    expect(
      getByTestId("shows-carousel")
        .querySelector(".react-multi-carousel-list")
        .querySelector(".react-multi-carousel-track ")
    );
  });
});