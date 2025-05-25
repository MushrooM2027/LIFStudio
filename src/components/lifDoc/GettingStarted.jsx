import React from 'react';
import { Container } from 'react-bootstrap';
import { Table, Tabs, Tab } from 'react-bootstrap';
import '../Content.css';


const GettingStarted = () => {
  const linuxDownloads = [
    {
      description: "ARM64 Compressed Archive",
      size: "229.32 MB",
      link: "https://download.oracle.com/java/24/latest/jdk-2"
    },
    {
      description: "ARM64 RPM Package",
      size: "228.92 MB",
      link: "https://download.oracle.com/java/24/lates"
    },
    {
      description: "x64 Compressed Archive",
      size: "231.94 MB",
      link: "https://download.oracle.com/java/24/latest/jdk-24_lin"
    },
    {
      description: "x64 Debian Package",
      size: "200.09 MB",
      link: "https://download.oracle.com/java/24/latest/jdk-24_"
    },
    {
      description: "x64 RPM Package",
      size: "231.51 MB",
      link: "https://download.oracle.com/java/24/"
    },
  ];

  return (
    <Container className="content-intro">
      <h2 className="mb-3">Getting Started</h2>

      <p>
        To help users quickly set up and start using the DSLCompiler, this section outlines the installation steps, 
        prerequisites, and different options for running the tool. Whether you're a beginner or an advanced developer,
         you can choose between using the lightweight LIF Studio editor or directly integrating the <strong>DSLCompiler JAR </strong>
         into your workflow.
      </p>

      <h5 className="text-muted mb-4"><strong>Installation</strong></h5>
      <h5 className="text-muted mb-4"><i><bold>Option 1: Using LIF Studio</bold></i></h5>

      <p>
        LIF Studio is a user-friendly desktop application similar to Notepad, designed specifically to work with the 
        DSLCompiler. It provides a built-in text editor with syntax highlighting and a <strong>"Compile"</strong> button for one-click 
        output execution.
      </p>

    {/*Download link table---> */}
      <Tabs defaultActiveKey="windows" id="download-tabs" className="mb-3">
      <Tab eventKey="windows" title="Windows">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product/file description</th>
              <th>File size</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {linuxDownloads.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.size}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="macos" title="macOS">
        <p>macOS download options coming soon.</p>
      </Tab>
      <Tab eventKey="linux" title="Linux">
        <p>Windows download options coming soon.</p>
      </Tab>
    </Tabs>
    {/* <-------end */}
    <p></p>


    <h5 className="text-muted mb-4"><i><bold>Option 2: Using DSLCompiler JAR Manually</bold></i></h5>

    <p>
      For developers who want to integrate the compiler into their own projects or workflows, 
      the standalone JAR file offers full control.
    </p>

    <p><strong>Installation Steps:</strong></p>
    <p>1. Download the file <i><strong style={{color: "#69b41e"}}>DSLCompiler.jar</strong></i><br></br>
      2. Create your <i><strong style={{color: "#69b41e"}}>.ui</strong></i> file using any text editor or IDE<br></br>
      3. Open your terminal/command prompt and run: <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;<i><strong style={{color: "#69b41e"}}> java -jar path/to/your/jar input.ui</strong></i><br></br>
    </p>
    </Container>
  );
};

export default GettingStarted;
