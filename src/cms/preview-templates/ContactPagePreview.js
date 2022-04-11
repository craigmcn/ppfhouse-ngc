import React from 'react'
import PropTypes from 'prop-types'

const ContactPagePreview = ({ entry }) => {
  const { contacts } = entry.get('data').toJSON()

  const contact = contacts.filter(contact => contact.type === "Contact")
  const community = contacts.filter(contact => contact.type === "Community")

  return (
    <div className="columns">
      <div className="column">
        <h2 className="is-size-4">Contact</h2>
        {
          contact.map((entry, index) => {
            return (
              <p key={ index }><a href={ entry.url }>{ entry.name }</a> (<code>{ entry.url }</code>)</p>
            )
          })
        }
      </div>

      <div className="column">
        <h2 className="is-size-4">Community</h2>
        {
          community.map((entry, index) => {
            return (
              <p key={ index }><a href={ entry.url } target="_blank" rel="noreferrer">{ entry.name }</a> (<code>{ entry.url }</code>)</p>
            )
          })
        }
      </div>
    </div>
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default ContactPagePreview
