// import React from "react";

// class InputFile extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {     
//         selectedFile: null,
//         // selectedFile: [],
//         filesList: []     
//       };
//     }
  
//     uploadChosenFile(selectedFile, fileName) {
//       this.setState({
//         selectedFile,
//         filesList: fileName
//       });
//     }
  
//     handleUploadFile(event) {
//       const list = this.state.filesList;
  
//       list.push(event.target.files[0].name);
//       this.uploadChosenFile(event.target.files, list);
//     }
  
//     render() {
//       return (
//         <div>
//           <input id='file' name='file'
//             type='file' formEncType='multipart/form-data' onChange={this.handleUploadFile}
//             multiple
//           />
//           <div>
//             {this.state.filesList.map(item => {
//               return (<a className='edit__form-group-link' href='#' key={'1'}>{item}</a>);
//             })}
//           </div>
//         </div>
//       );
//     }
//   }