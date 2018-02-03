/**
 * External dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blocks;
const { RangeControl, ToggleControl } = wp.blocks.InspectorControls;

import Testimonial from './testimonial.jsx';

class TestimonialBlock extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { focus, setFocus, attributes, setAttributes } = this.props;
		const slideLists = [];

		const inspectorControls = focus && (
			<InspectorControls key="inspector">
				<h3>{ __( 'Settings' ) }</h3>
				<RangeControl
					label={ __( 'Columns' ) }
					value={ attributes.slideCount }
					onChange={ ( value ) => setAttributes( { slideCount: value } ) }
					min={ 1 }
					max={ 10 }
				/>
			</InspectorControls>
		);

		for ( let index = 0; index < attributes.slidesCount; index++ ) {

			const slideClass = `rt-testimonial rt-testimonial-${ index }`;

			const slideAttributes = attributes.slides[ index ] || {};

			slideLists.push(
				<Testimonial
					className={ slideClass }
					attributes={ slideAttributes }
					focused={ focus }
					setFocus={ setFocus }
					key={ index }
				/>
			);
		}

		return [
			inspectorControls,
			<div className={ this.props.className } key="slides-list">
				{ slideLists }
			</div>,
		];
	}
}
