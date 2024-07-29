import React, { useCallback, useMemo, useState } from "react";
import DataListInput, { useComboboxControls } from "react-datalist-input";
import "./filter.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/configureStore";
import { FilterDetailsProp } from "./UserListContainer";

interface SelectedProps {
  value: string;
}

interface FilterDemo {
  filterhandle: (filterDetails: FilterDetailsProp) => void;
  filterDisplay: () => void;
  reset: () => void;
}

const Filter = ({ filterhandle, filterDisplay, reset }: FilterDemo) => {
  const [filterDetails, setFilterDetails] = useState<FilterDetailsProp>({
    userName: "",
    phoneNo: "",
    date: "",
    status: "",
    email: "",
  });
  const userStore = useSelector((state: RootState) => state.users);

  const { setValue, value } = useComboboxControls();

  const { users } = userStore;

  const onSelect = useCallback((selectedItem: SelectedProps) => {
    setValue(selectedItem.value);
  }, []);

  const organizations = useMemo(
    () =>
      users
        .map((user) => user.personalInformation.company)
        .sort((a, b) => a.localeCompare(b))
        .map((org, index) => ({
          id: index,
          value: org,
        })),
    [value]
  );

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitFilter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    filterhandle({
      ...filterDetails,
      organization: value,
    });
    filterDisplay();
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    reset();
    setFilterDetails({
      userName: "",
      phoneNo: "",
      date: "",
      status: "",
      email: "",
    });
  };

  return (
    <div className="filter__cont">
      <form className="filter__form__cont">
        <div className="data__list__cont">
          <DataListInput
            label="Organization"
            placeholder="Select organization"
            items={organizations}
            onSelect={onSelect}
            value={value}
            setValue={setValue}
          />
        </div>
        <div className="filter__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="userName"
            id="name"
            placeholder="UserName"
            value={filterDetails.userName}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="filter__input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={filterDetails.email}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="filter__input">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            value={filterDetails.date}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="filter__input">
          <label htmlFor="Phone Number">Phone Number</label>
          <input
            type="text"
            name="Phone Number"
            id="Phone Number"
            placeholder="Phone Number"
            value={filterDetails.phoneNo}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="filter__input">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            name="status"
            id="status"
            placeholder="Status"
            value={filterDetails.status}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="form__button__control">
          <button className="reset__control" onClick={(e) => handleReset(e)}>
            reset
          </button>
          <button
            type="submit"
            className="submit__btn__"
            onClick={(e) => submitFilter(e)}
          >
            filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
