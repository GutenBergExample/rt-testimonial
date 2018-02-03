/**
 * External dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Editable } = wp.blocks;

class Testimonial extends Component {
	constructor( props ) {
		super( props );
		this.onChangeContent = this.onChangeContent.bind( this );
	}

	onChangeContent( newContent ) {
		this.props.setAttributes( { content: newContent } );
	}
	render() {
		const { focus, setFocus, attributes } = this.props;
		const { className } = this.props;

		const slideView = (
			<div className="rt-testimonial">
				<div className="rt-testimonial__image-container">
					<img className="rt-testimonial__image" src={ attributes.image } alt={ attributes.imageAlt } width={ attributes.imageWidth } height={ attributes.imageHeight } />
				</div>
				<div className="rt-testimonial__content-container">
					<p className="rt-testimonial__content">{ attributes.content }</p>
				</div>
			</div>
		);

		const slideEdit = (
			<div className="rt-testimonial">
				<div className="rt-testimonial__image-container">
					<img className="rt-testimonial__image" src={ attributes.image } alt={ attributes.imageAlt } width={ attributes.imageWidth } height={ attributes.imageHeight } />
				</div>
				<div className="rt-testimonial__content-container">
					<Editable
						className={ className }
						placeholder={ __( 'Write here...' ) }
						onChange={ this.onChangeContent }
						value={ attributes.content }
						focus={ focus }
						onFocus={ setFocus }
					/>
				</div>
			</div>
		);

		if ( focus ) {
			return (
				<div className={ className }>
					{ slideEdit }
				</div>
			);
		}

		return (
			<div className={ className }>
				{ slideView }
			</div>
		);
	}
}

export default Testimonial;
