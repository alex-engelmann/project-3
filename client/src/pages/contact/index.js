// import Iframe from "react-iframe"
// <Iframe url ="https://docs.google.com/forms/d/e/1FAIpQLSfAg_OdqBmzvza-xXsUdMaIIXOfmrgU6Jub8RqGlwh_aeh4AA/viewform?embedded=true"
// width="450px"
// height="753px"
// id="myId"
// className="myClassname"
// display="initial"
// position="relative" />

const Component = React.createClass({
    iframe: function () {
      return {
        __html: this.props.iframe
      }
    },
  
    render: function() {
      return (
        <div>
          <div dangerouslySetInnerHTML={ this.iframe() } />
        </div>
      );
    }
  });
  
  const iframe = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAg_OdqBmzvza-xXsUdMaIIXOfmrgU6Jub8RqGlwh_aeh4AA/viewform?embedded=true" width="640" height="753" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>; 
  
  ReactDOM.render(
    <Component iframe={iframe} />,
    document.getElementById('container')
  );







