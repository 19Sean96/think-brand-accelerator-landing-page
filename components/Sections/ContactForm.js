import ContentWrapper from "../ContentWrapper";
import Link from "next/link";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";

const ContactForm = (props) => {
	const { register, handleSubmit, watch, control, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  }

	const watchInputs = watch();
	const phoneIsValid = (phone) => /^\(\d{3}\)\s\d{3}-\d{4}/.test(phone);

	return (
		<section className="contact-form">
			<ContentWrapper>
				<div className="contact-form--content">
					<h3 className="capitalize contact-form--title">
						we'd love to work with you!
					</h3>
					<h6 className="contact-form--subtitle capitalize">
						get started below
					</h6>
					<div className="form__wrapper">
						<form className="form">
							<div className="form--input__wrapper half">
								<label htmlFor="name" className="capitalize">
									your name
								</label>
								<input
									type="text"
									name="name"
									ref={register({
										required: true,
									})}
									className="form--input"
									id="name"
								/>
								{errors.name &&
									errors.name.type === "required" && (
										<span role="alert">
											This is required
										</span>
									)}
							</div>

							<div className="form--input__wrapper half">
								<label
									htmlFor="brandName"
									className="capitalize"
								>
									brand name
								</label>
								<input
									type="text"
									name="brandName"
									ref={register({
										required: true,
									})}
									className="form--input"
									id="brandName"
								/>
								{errors.brandName &&
									errors.brandName.type === "required" && (
										<span role="alert">
											This is required
										</span>
									)}
							</div>

							<div className="form--input__wrapper half">
								<label htmlFor="phone" className="capitalize">
									phone
								</label>
								<Controller
									control={control}
									name="phone"
									defaultValue=""
									id="phone"
									ref={register({
										required: true,
									})}
									className="form--input"
									render={({
										onChange,
										onBlur,
										value,
										name,
										id,
										ref,
									}) => (
										<NumberFormat
											ref={ref}
											className="form--input"
											onChange={onChange}
											onBlur={onBlur}
											value={value}
											format="(###) ###-####"
											placeholder="(123) 456-7890"
											mask="_"
											name={name}
											id={id}
										/>
									)}
								/>
								{!phoneIsValid && failedSubmitAttempt && (
									<span role="alert">
										Please enter a valid phone number
									</span>
								)}
							</div>

							<div className="form--input__wrapper half">
								<label htmlFor="email" className="capitalize">
									email
								</label>
								<input
									type="text"
									name="email"
									ref={register({
										required: true,
									})}
									className="form--input"
									id="email"
								/>
								{errors.email &&
									errors.email.type === "required" && (
										<span role="alert">
											This is required
										</span>
									)}
							</div>

							<div className="form--input__wrapper full">
								<label
									htmlFor="explanation"
									className="capitalize"
								>
									what are you looking to do?
								</label>
								<textarea
									ref={register}
									name="explanation"
									id="explanation"
									cols="30"
									rows="10"
									className="form--input"
								></textarea>
							</div>

              <div className="form--submit__wrapper full">
                <button
                  type="submit"
                  className="form--submit uppercase"
                  onClick={handleSubmit(onSubmit)}
                >
                  submit
                </button>
              </div>

						</form>
					</div>
				</div>
			</ContentWrapper>
		</section>
	);
};

export default ContactForm;
