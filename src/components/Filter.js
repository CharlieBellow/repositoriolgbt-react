import React from "react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";



const initialCheckboxes = [
	{ name: "lesbica", check: false },
	{ name: "gay", check: false },
	{ name: "bissexualidade", check: false },
	{ name: "travestis", check: false },
	{ name: "transexuais", check: false },
	{ name: "trans", check: false },
	{ name: "pansexualidade", check: false },
	{ name: "artigo", check: false },
	{ name: "dissertação", check: false },
	{ name: "escritos por trans", check: false },
	{ name: "escrito por LGBT", check: false },
	{ name: "assexualidade", check: false },
	{ name: "gênero", check: false },
	{ name: "lgbt", check: false },
];

function Filter({ onCheckboxClick }) {
	const [listChecks, setListChecks] = useState(initialCheckboxes);

	function handleClick(event) {
		const updatedCheckboxes = listChecks.map(checkbox =>
			checkbox.name === event.target.name
				? { ...checkbox, check: !checkbox.check }
				: { ...checkbox }
		);

		setListChecks(updatedCheckboxes);
		onCheckboxClick(updatedCheckboxes);
	}


	return (
		<>
			<div calssName="content flex">
				<div className={`filter__ret--purple content`}>
					<input
						type="checkbox"
						name="toggle"
						id="toggle"
						className={`input-checkbox`}
					/>

					<div className="checkbox-wrapper">
						<div name="filtro" className={`filter__form `}>
							<h3 className="h3">Filtro:</h3>
							<div>
								{listChecks.map(checkbox => (
									<div key={checkbox.name}>
										<input
											className="checkbox"
											type="checkbox"
											name={checkbox.name}
											id={checkbox.name}
											onClick={handleClick}
											checked={checkbox.check}
										/>
										<label htmlFor={checkbox.name}>{checkbox.name}</label>
									</div>
								))}
							</div>
						</div>

						<label htmlFor="toggle">
							<FaChevronRight
								className="icon__svg"
								size={24}
								//onClick={handleClass}
							/>
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default Filter;
