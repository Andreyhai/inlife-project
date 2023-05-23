import UploadFilesService from "../services/ upload-files.service";
import React, {Component} from "react";
import "react-bootstrap";
import "./UploadFiles.css";
import image from "../sourse/images/picture.svg";
export default class UploadFiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],
    };
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadFilesService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadFilesService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  componentDidMount() {
    UploadFilesService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  render() {
    let {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
    } = this.state;

    return (
      <div className="w-1/2 h-1/3 flex flex-wrap items-center justify-center">
        {currentFile && (
          <div className="progress w-full mb-5">
            <div
              className="progress-bar progress-bar-info progress-bar-striped bg-purple-700 progress-bar-animated"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {/* {progress}% */}
            </div>
          </div>
        )}

        <label className="btn btn-default mb-3">
          <input type="file" onChange={this.selectFile} />
        </label>

        {/* <div class="input__wrapper">
          <input name="file" type="file" id="input__file" class="input input__file" onChange={this.selectFile} multiple />
          <label for="input__file" class="input__file-button">
            <img className="w-1/12" src={image} alt="" />
            <span class="input__file-button-text">+ Добавить файл</span>
          </label>
        </div> */}

        {
          selectedFiles && <button className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>
        }

        <div className="alert alert-light" role="alert">
          {message}
          тут будут ошибки
        </div>
        <div className="card w-80">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}