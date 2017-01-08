import React from 'react';
import { Form, FormField, Button } from 'elemental';
import Module from '../../../../components/Module/Module';
import { updateClassRequest } from '../../../../ajax';

class UploadClasslist extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
    this.handleChange = this.handleChange.bind(this);
    this.uploadForm = this.uploadForm.bind(this);
  }

  handleChange(event) {
    this.setState({ files: event.target.files });
  }

  uploadForm(e) {
    e.preventDefault();

    // check if csv file exists
    if (!this.state.files.length) {
      alert('Error: No file uploaded!');
    } else {
      // transform uploaded csv into formData for sending via ajax
      const file = new FormData();
      file.append(0, this.state.files[0]);

      // POST api/class/list
      updateClassRequest(
        file,
        (response) => {
          alert(`Success: ${response}`);
        },
        (response) => {
          alert(`Error: ${response}`);
        },
      );
    }
  }

  render() {
    return (
      <Module id="upload-classlist-module" title="Upload New Classlist" initialHideContent={false}>
        <Form onSubmit={this.uploadForm}>
          <FormField id="text-center">
            <input type="file" accept=".csv" id="inputCSV" onChange={this.handleChange} />
            <Button type="danger" size="sm" submit>Submit</Button>
          </FormField>
        </Form>
      </Module>
    );
  }
}

export default UploadClasslist;