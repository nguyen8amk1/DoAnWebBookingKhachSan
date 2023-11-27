import "../../style/Searchpage/Searchpage__sidebar.scss";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Searchpage__searchitem from "./Searchpage__searchitem";
import LocationOnMapSetting from "../Map/LocationOnMapSetting";
import MapModal from "../../views/MapModal";

const Searchpage__sidebar = (props) => {
	const location = useLocation();
	const initialDestination = location.state ? location.state.destination : "";
	const initialOptions = location.state ? location.state.options : {};

	const [destination, setDestination] = useState(initialDestination);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(initialOptions);
	const [openMapModal, setOpenMapModal] = useState(false);

	const showMapModal = () => {
		console.log("Show map");
		setOpenMapModal(true);
	};

	const toggleMapModal = () => {
		const temp = !openMapModal;
		setOpenMapModal(temp);
	};

	return (
		<div className="searchpage-sb-container">
			<MapModal
			isOpenModal={openMapModal}
			toggle={toggleMapModal}
			/>

			<div className="searchpage-sb-wrapper">
				<div className="searchpage-sb-listsearch">
					<h1 className="searchpage-sb-listtitle">Search</h1>
					<div className="searchpage-sb-listitem">
						<label>Destination</label>
						<input
							type="text"
							className="form-control"
							aria-label="Amount (to the nearest dollar)"
							placeholder={destination}
						/>
					</div>
					<div className="searchpage-sb-listitem">
						<label>Check-in Date</label>
						<span
							className="clickable-date"
							onClick={() => setOpenDate(!openDate)}
						>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
							date[0].endDate,
							"MM/dd/yyyy"
						)}`}</span>
						{openDate && (
							<DateRange
								onChange={(item) => setDate([item.selection])}
								minDate={new Date()}
								ranges={date}
							/>
						)}
					</div>

					<div className="searchpage-sb-listitem">
						<label>Options</label>
						<div className="ls-options">
							<div className="ls-optionItem">
								<span className="ls-optionText">
									Min price <small>per night</small>
								</span>
								<input type="number" className="ls-optionInput" />
							</div>
							<div className="ls-optionItem">
								<span className="ls-optionText">
									Max price <small>per night</small>
								</span>
								<input type="number" className="ls-optionInput" />
							</div>
							<div className="ls-optionItem">
								<span className="ls-optionText">Adult</span>
								<input
									type="number"
									min={1}
									className="ls-optionInput"
									placeholder={options.adult}
								/>
							</div>
							<div className="ls-optionItem">
								<span className="ls-optionText">Children</span>
								<input
									type="number"
									min={0}
									className="ls-optionInput"
									placeholder={options.children}
								/>
							</div>
							<div className="ls-optionItem">
								<span className="ls-optionText">Room</span>
								<input
									type="number"
									min={1}
									className="ls-optionInput"
									placeholder={options.room}
								/>
							</div>
						</div>
					</div>

					<button
						type="button"
						className="searchpage-sb-listsearch btn btn-primary btn-sidebar"
					>
						Search
					</button>
					<br />

					<div onClick={showMapModal}>
						<LocationOnMapSetting  width="250px" height="200px" style={{}} />
					</div>

				</div>

				<div className="searchpage-sb-listresult">
					{props.searchResults.map((info, index) => (
						<Searchpage__searchitem key={index} info={info} />))}
				</div>

			</div>
		</div>
	);
};

export default Searchpage__sidebar;
