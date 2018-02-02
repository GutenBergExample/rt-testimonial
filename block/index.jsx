/**
 * External dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';
import Testimonial from './testimonial.jsx';

const { registerBlockType } = wp.blocks;

const blockAttr = {
	slides: {
		type: 'array',
		selector: '.rt-testimonial',
		source: 'query',
		query: {
			content: {
				type: 'html',
				selector: '.rt-testimonial__content',
			},
			image: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'src',
			},
			imageAlt: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'alt',
			},
			imageWidth: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'width',
			},
			imageHeight: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'height',
			},
		},
	},
};

registerBlockType( 'rt-blocks/testimonial', {
	title: __( 'Testimonial' ),
	description: __( 'Testimonial Block' ),
	attributes: blockAttr,
	category: 'common',
	edit: Testimonial,
	save: props => {
		const slider = props.attributes.slides ? props.attributes.slides : '';
		const slideLists = slider.map( ( slides, index ) => (

			<div className="rt-testimonial" key={ index }>
				<div className="rt-testimonial__image-container">
					<img className="rt-testimonial__image" src={ slides.image } alt={ slides.imageAlt } width={ slides.imageWidth } height={ slides.imageHeight } />
				</div>
				<div className="rt-testimonial__content-container">
					<p className="rt-testimonial__content">{ slides.content }</p>
				</div>
			</div>
		) );
		return (
			<div className={ props.className ? props.className : '' }>
				{ slideLists }
			</div>
		);
	},
} );

