import ContentWrapper from "../ContentWrapper";

const Steps = (props) => {
	return (
		<section className="steps">
			<ContentWrapper>
				<h1 className="steps--title">
					helping brands grow is our passion.
				</h1>
				<h3 className="steps--subtitle">
					so we made it as easy as possible to get started.
				</h3>
				<div className="steps--list">
					<div className="steps--list--item">
						<h4>
							<span>free</span> audit
						</h4>
						<p>
							Branding can be expensive, & we want to make sure
							that we're the ones to help you on your journey! To
							do that, we'll conduct a marketing "pulse check" to
							see where you are in your business' success journey.
							It all starts with a "hello".
						</p>
					</div>
					<div className="steps--list--item">
						<h4>
							<span>vision</span> assessment
						</h4>
						<p>
							Alright, so the audit is complete. We'll bring up
							some items we discovered, but we really want to
							understand you, your business & your vision.
						</p>
					</div>
					<div className="steps--list--item">
						<h4>
							<span>tailored</span> service
						</h4>
						<p>
							Now we understand you & your goals, & we've provided
							you some detailed (free!) information. It's time to
							get to work! We'll dive in to your personal service
							package/pricing structure based on what you value -
							this way you're getting exactly what you want.
						</p>
					</div>
				</div>
			</ContentWrapper>
		</section>
	);
};


export default Steps