import React, {Component} from 'react';
import BreadCrumbs from './shared/BreadCrumbs';
import GoogleMap from './contacts/GoogleMap';

class ContactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'contacts'
    };
  }

  render() {
    return (
      <div>
        <BreadCrumbs category={this.state.category} />
        <div className="google-map">
          <GoogleMap />
        </div>
      </div>
    )
  }
}

export default ContactsPage;
