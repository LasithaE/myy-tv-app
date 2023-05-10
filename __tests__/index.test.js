import { render } from "@testing-library/react";
import Home from "../src/pages/index";
import { store } from "@/redux/store";
import { fetchShowDetails } from "@/redux/slices/show/showDetailsSlice";
import { Provider } from "react-redux";
import AllShows from "@/pages/shows/all";
import ShowDetails from "@/pages/shows/[id]";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import People from "@/pages/people";
import PeopleDetails from "@/pages/people/[id]";

jest.mock("next/router");


describe("Home", () => {
  it("shows and people list", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("shows")).toBeInTheDocument();
    expect(getByTestId("people")).toBeInTheDocument();
  });
});
describe("AllShows", () => {
  it("check if show carousel work", () => {
    const allShows = [
      {
        id: 1,
        title: "Show 1",
        genres: ["Genre 1", "Genre 2"],
        image: { original: "image-url" },
        rating: 8,
      },
      {
        id: 2,
        title: "Show 2",
        genres: ["Genre 3", "Genre 4"],
        image: { original: "image-url" },
        rating: 8,
      },
    ];
    const { getByTestId } = render(
      <Provider store={store}>
        <AllShows allShows={allShows} />
      </Provider>
    );
    expect(
      getByTestId("shows-carousel")
        .querySelector(".react-multi-carousel-list ")
        .querySelector(".react-multi-carousel-track ")
    );
  });
});
describe("People", () => {
  it("check if people carousel work", () => {
    const people= [
      {
        id: 1,
        title: "Person 1",
       
      },
      {
        id: 2,
        title: "Person 2",
       },
    ];
    const { getByTestId } = render(
      <Provider store={store}>
        <People allPeople={people} />
      </Provider>
    );
    expect(
      getByTestId("people-carousel")
        .querySelector(".react-multi-carousel-list ")
        .querySelector(".react-multi-carousel-track ")
    );
  });
});
mockRouter.useParser(
  createDynamicRouteParser([
    "/shows",
    "/shows/all",
    "/shows/featured",
    "/shows/[id]",
    "/people",
    "people/[id]",
  ])
);

describe("ShowDetails", () => {
  it("should render show details", async () => {

    const mockShowDetails = {
      id: 1,
      name: "Mock Show",
      summary: "This is a mock show",
      image: "/public/assets/sample.png",
      network: { name: "HBO" },
      status:"ended",
      rating:4,
      genres:["drama", "horror", "funny"]
    };
    mockRouter.push("/shows/1");

    const useRouterMock =jest.spyOn(require('next/router'), "useRouter").mockImplementation(() => {

      return Promise.resolve(mockShowDetails);
    });
      useRouterMock.mockImplementation(() => ({
      query:{id:1},
    }));
    jest.spyOn(store, "dispatch").mockImplementation(() => {
      return Promise.resolve(mockShowDetails);
    });


    await store.dispatch(fetchShowDetails({ id: "1" }));

    const {getByTestId}=render(
      <Provider store={store}>
        <ShowDetails />
      </Provider>
    );
    expect(getByTestId("show-details")).toBeInTheDocument();
  });
});
describe("PeopleDetails", () => {
  it("should render people details", async () => {

    const mockPeopleDetails = {
      id: 1,
      name: "Mock Person",
      image: "/public/assets/sample.png",
      birthday:"1979-07-17",
      age:28,
      gender:"Female",
      country:{name:"USA"}
    };
    mockRouter.push("/people/1");

    const useRouterMock =jest.spyOn(require('next/router'), "useRouter").mockImplementation(() => {

      return Promise.resolve(mockPeopleDetails);
    });
      useRouterMock.mockImplementation(() => ({
      query:{id:1},
    }));
    jest.spyOn(store, "dispatch").mockImplementation(() => {
      return Promise.resolve(mockPeopleDetails);
    });


    await store.dispatch(fetchShowDetails({ id: "1" }));

    const {getByTestId}=render(
      <Provider store={store}>
        <PeopleDetails />
      </Provider>
    );
    expect(getByTestId("people-details")).toBeInTheDocument();
  });
});
