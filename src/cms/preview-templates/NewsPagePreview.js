import React from 'react';
import PropTypes from 'prop-types';
import { md2Html } from '../../utilities';
import { HTMLContent } from '../../components/shared/Content';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const NewsPagePreview = ({ entry }) => {
  const { title, group, general, postedBy, date, body } = entry
    .get('data')
    .toJSON();

  return (
    <>
      <h2 className="is-size-3">{title}</h2>
      <p>
        {group ? <span className="tag is-primary">{group}</span> : null}
        {general ? (
          <span className={`tag is-info${group ? ' ml-1' : ''}`}>General</span>
        ) : null}
      </p>
      <div className="content">
        <HTMLContent content={md2Html(body)} />
      </div>
      <p className="notification is-info is-light">
        posted {postedBy ? `by ${postedBy}, ` : ''}
        {format(parseISO(date), 'MMMM d, y')}
      </p>
    </>
  );
};

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
};

export default NewsPagePreview;
