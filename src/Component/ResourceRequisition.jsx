import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

export const ResourceRequisition = () => {

  const [selectedList, setSelectedList] = useState([]);
  const handleChange = async (e) => {

    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setSelectedList(selectedValues);
    const param = {
      resources: selectedList
    };
    var str="";
    for(let i=0;i<selectedList.length;i++){
      str=str.concat(selectedList[i]);
      str=str.concat(" ");

  }
  console.log("str  :: "+str);
  const res=await  axios.get(`http://localhost:8080/api/viewTechnology/${str}`);
  setTechnologydata(res.data);
  SetResourceData({ ...resourcedata, technologyData: e.target.value });

  console.log(res)
  // setTechnologydata(res);
   // console.log(selectedList);
    //const technologies = axios.get(`http://localhost:8080/api/viewTechnology/`) 
  }

  const [resourcedata, SetResourceData] = useState({});
  // console.log(resourcedata)
  const [viewDomainsdata, setViewDomainsdata] = useState([]);
  const [hiringTypedata, setHiringTypedata] = useState([]);
  const [countrydata, setCountryData] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [graduationdata, setGraduationdata] = useState([]);
  const [graduationspecialization, setGraduationspecialization] = useState([]);
  const [postgraduationdata, setPostGraduationdata] = useState([]);
  const [postgraduationspecialization, setPostGraduationspecialization] =
    useState([]);
  const [othergraduationdata, setOtherGraduationdata] = useState([]);
  const [othergraduationspecialization, setOtherGraduationspecialization] =
    useState([]);
  const [employee, setEmployee] = useState([]);
  const [resource, setResource] = useState([]);
  const [technologyData, setTechnologydata] =
    useState([]);

  const getdata = async () => {
    const result = await axios.get("http://localhost:8080/api/viewdomains");
    setViewDomainsdata(result.data);
    // console.log(viewDomainsdata)
    const result1 = await axios.get("http://localhost:8080/api/hiringType");
    setHiringTypedata(result1.data);
    const result2 = await axios.get("http://localhost:8080/api/country");
    setCountryData(result2.data);
    
    
    
    const result8 = await axios.get(
      "http://localhost:8080/api/otherqualificationDegree"
    );
    setOtherGraduationdata(result8.data);
    const result9 = await axios.get(
      "http://localhost:8080/api/otherqualificationSpecialization"
    );
    setOtherGraduationspecialization(result9.data);
    const result10 = await axios.get("http://localhost:8080/api/getEmployee");
    setEmployee(result10.data);
  }
    // console.log(ressult11);
   
   const [resourcetype,setResourceType]=useState([])
  const getresource=async()=>{
    const res = await axios.get("http://localhost:8080/api/viewResource");
    setResourceType(res.data);
    // console.log(res.data)

  }
  const getqualification=async()=>{
    const result3 = await axios.get("http://localhost:8080/api/qualification");
    setQualification(result3.data);
  }

  
  useEffect(() => {
    getdata();
    getresource()
    getqualification()
  }, []);

  var [data, setData] = useState();
  var handlequalification = async(e) => {
    const result4 = await axios.get("http://localhost:8080/api/viewQualificationDegree/2");
    setGraduationdata(result4.data);

    const result6 = await axios.get(`http://localhost:8080/api/viewQualificationDegree/3`);
    setPostGraduationdata(result6.data);
    setData(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, qualification: e.target.value });
  };
  // console.log(data);

  var [developer, setDeveloper] = useState();

   
  // const handleChange = e => {
    
  //   let { options } = e.target.id;
  //   console.log("options",options) ;
  //   options = Array.apply(null, options)
  //   const selectedValues = options.filter(x => x.selected).map(x => x.value);
  //   setSelectedList(selectedValues);
  // }

  const handleTypeofDeveloper =async (e) => {
    let { options } = e.target;
    console.log(options)
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setSelectedList(selectedValues);
    console.log(selectedList);
    alert("2");
    let id = e.target.value;
    alert("id "+id);
   // const res = await axios.get(`http://localhost:8080/api/viewTechnology/${id}`);
    //setTechnologydata(res.data);
    console.log(id)
  
    setDeveloper(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, resource: e.target.value });

  };
  // console.log(developer);
  // const typeOfDeveloper = [{ value: 1, label: "Full Stack" }];

  var [technology, setTechnology] = useState();
  var handleTechnology = (e) => {
    setTechnology(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  // console.log(technology);
  // const technologydata = [{ value: 1, label: "Java" }];

  var [technologyspec, setTechnologyspec] = useState();
  var handleTechnologyspec = (e) => {
    setTechnologyspec(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  // console.log(technologyspec);
  const technologyspecdata = [{ value: 1, label: "Java" }];

  var [graduation, setGraduation] = useState();
  var handlegraduation = async(e) => {
    let id = e.target.value;
    const result5 = await axios.get(`http://localhost:8080/api/viewQualificationSpecialization/${id}`);
    setGraduationspecialization(result5.data);

    
    setGraduation(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, graduationDegree: e.target.value });
  };
  // console.log(graduation);

  var [postgraduation, setPostGraduation] = useState();
  var handlepostgraduation = async (e) => {
    let id = e.target.value;
    const result7 = await axios.get(`http://localhost:8080/api/viewQualificationSpecialization/${id}`);
    setPostGraduationspecialization(result7.data);
    setPostGraduation(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, postgraduationDegree: e.target.value });
  };
  // console.log(postgraduation);

  var [graduationspec, setGraduationspec] = useState();
  var handlegraduationspec = (e) => {
    setGraduationspec(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, graduationSpec: e.target.value });
  };
  // console.log(graduationspec);

  var [postgraduationspec, setPostGraduationspec] = useState();
  var handlepostgraduationspec = (e) => {
    setPostGraduationspec(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, postgraduationSpec: e.target.value });
  };
  // console.log(postgraduationspec);

  var [otherspecialization, setOtherspecialization] = useState();
  var handleotherspecialization = (e) => {
    setOtherspecialization(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, othergraduationSpec: e.target.value });
  };
  // console.log(otherspecialization);

  var [otherqualification, setOtherqualification] = useState();
  var handleotherqualification = (e) => {
    setOtherqualification(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, othergraduationDegree: e.target.value });
  };
  // console.log(otherqualification);

  var [domain, setDomain] = useState();
  var handledomain = (e) => {
    setDomain(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, domainknowledge: e.target.value });
  };

  const [Passport, setPassport] = useState(true);
  const [relocate, setRelocate] = useState(true);

  const [statedata, setStatedata] = useState([]);
  const handlecountry = async (e) => {
    let id = e.target.value;
    console.log('ID:', id);
    const countryresult = await axios.get(
      `http://localhost:8080/api/country/state/${id}`
    );
    setStatedata(countryresult.data);
    SetResourceData({ ...resourcedata, worklocationcountry: e.target.value });
  };

  const [citydata, setCitydata] = useState([]);
  const handlestate = async (e) => {
    let id = e.target.value;
    const stateresult = await axios.get(
      `http://localhost:8080/api/country/state/city/${id}`
    );
    setCitydata(stateresult.data);
    SetResourceData({ ...resourcedata, worklocationstate: e.target.value });
  };

  const handlesave = (resourcedata) => {
    localStorage.setItem(
      "resourcerequisitiondata",
      JSON.stringify(resourcedata)
    );
  };
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="h1">Resourse Requirement</h1>
      </div>
      <div className="text-end">
        <span className="birla">birla</span>
        <span className="soft">soft</span>
      </div>
      <div className="row py-3">
        <div className="col">
          <form action="">
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <button className="col-sm-1 btn-outline-primary btn-sm ">
                NEW
              </button>
              <label className="col-sm-4 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Search Request No:
              </label>
              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <button type="submit" className="col-sm-1 btn btn-primary btn-sm">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable"> Employee Name:</label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  placeholder={employee.employeeName}
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employeename: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-2 col-form-lable">Created On:</label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employeename: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Employee ID:</label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  placeholder={employee.employeeId}
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employeeid: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-2 col-form-lable">Years Of Exp:</label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control form-control-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      yearofexp: e.target.value,
                    })
                  }
                />
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Hiring Type:</label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      hiringtype: e.target.value,
                    })
                  }
                >
                  <option>Select Type </option>
                  {hiringTypedata.map((item) => {
                    return (
                      <option value={item.hiringTypeId}>
                        {item.hiringType}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Type Of Developer:
              </label>
              <div className="col-sm-3">
              {/* <Select isMulti options={resourcetype.map((item) => ({
                    value: item.resourceTypeId,
                    label: item.resourceType,
                  }))}
                  onChange={handleTypeofDeveloper}
                ></Select> */}
                <select multiple name="list-box" onChange={handleChange}>
                {resourcetype.map((item) => {
                  return  <option id={item.resourceTypeId} value={item.resourceTypeId}>
                            {item.resourceType}
                          </option>
                })}
              </select>
              <br /><br />
              <b>Output:</b>
              <pre>{JSON.stringify(selectedList)}</pre>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Requested By:</label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-m"
                  disabled
                />
              </div>
              <label className="col-sm-2 col-form-lable">Technology:</label>
              <div className="col-sm-3">
                <Select
                  isMulti
                  options={technologyData.map((item)=>({value:item.technologyId,label:item.technology}))}
                  onChange={handleTechnology}
                ></Select>
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Require Domain Knowledge:
              </label>
              <div className="col-sm-3">
                <Select
                  isMulti
                  options={viewDomainsdata.map((item) => ({
                    value: item.domainId,
                    label: item.domainKnowledge,
                  }))}
                  onClick={handledomain}
                ></Select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Technology Specialization:
              </label>
              <div className="col-sm-3">
                <Select
                  isMulti
                  options={technologyspecdata}
                  onChange={handleTechnologyspec}
                ></Select>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Work Location Country:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={handlecountry}
                >
                  <option>Select Country </option>
                  {countrydata.map((item) => {
                    return (
                      <option value={item.countryId}  key={item.countryId}>
                        {item.countryName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Education Qualification:
              </label>
              <div className="col-sm-3">
              <select
                  className="form-select form-select-m"
                  onClick={handlequalification}
                >
                  <option>Select Qualification </option>
                  {qualification.map((item) => {
                    return (
                      <option value={item.qualificationId}  key={item.qualificationId}>
                        {item.qualification}
                      </option>
                    );
                  })}
                </select>
                {/* <Select
                  options={qualification.map((item) => ({
                    value: item.qualification,
                    label: item.qualification,
                  }))}
                  onClick={handlequalification}
                ></Select> */}
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Work Location State:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m "
                  onChange={handlestate}
                >
                  <option>Select State </option>
                  {statedata.map((item) => {
                    return (
                      <option value={item.stateId} key={item.stateId}>
                        {item.stateName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">Graduation:</label>
              <div className="col-sm-3">
                {/* <Select
                  isMulti
                  options={graduationdata.map((item) => ({
                    value: item.degreeId,
                    label: item.degreeName,
                  }))}
                  onChange={handlegraduation}
                ></Select> */}
                <select
                  className="form-select form-select-m "
                  onChange={handlegraduation}
                >
                  <option>Select Graduation </option>
                  {graduationdata.map((item) => {
                    return (
                      <option value={item.degreeId} key={item.degreeId}>
                        {item.degreeName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Work Location City:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      worklocationcity: e.target.value,
                    })
                  }
                >
                  <option>Select City </option>
                  {citydata.map((item) => {
                    return (
                      <option value={item.cityName} key={item.cityId}>
                        {item.cityName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Graduation Specialization:
              </label>
              <div className="col-sm-3">
              {/* <select
                  className="form-select form-select-m"
                  onChange={handlegraduationspec}
                >
                  <option>Select Specialization </option>
                  {graduationspecialization.map((item) => {
                    return (
                      <option value={item.specializationId} key={item.specializationId}>
                        {item.specializationName}
                      </option>
                    );
                  })}
                </select> */}
                 <Select
                  isMulti
                  options={graduationspecialization.map((item) => ({
                    value: item.specializationId,
                    label: item.specializationName,
                  }))}
                  onClick={handlegraduationspec}
                ></Select>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Resource Available Date:
              </label>
              <div className="col-sm-3">
                <input
                  type="date"
                  name=""
                  id=""
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      resourceavailabledate: e.target.value,
                    })
                  }
                />
              </div>

              <label className="col-sm-2 col-form-lable">
                Post-Graduation:
              </label>
              <div className="col-sm-3">
                {/* <Select
                  isMulti
                  options={postgraduationdata.map((item) => ({
                    value: item.degreeId,
                    label: item.degreeName,
                  }))}
                  onChange={handlepostgraduation}
                ></Select> */}
                <select
                  className="form-select form-select-m"
                  onChange={handlepostgraduation}
                >
                  <option>Select Post graduation </option>
                  {postgraduationdata.map((item) => {
                    return (
                      <option value={item.degreeId} key={item.degreeId}>
                        {item.degreeName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Time Zone Of Shifts:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      timezone: e.target.value,
                    })
                  }
                >
                  <option>Select Time Zone </option>
                  <option>India</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>Japan</option>
                </select>
              </div>

              <label className="col-sm-2 col-form-lable">
                Post-Graduation Specialization:
              </label>
              <div className="col-sm-3">
                <Select
                  isMulti
                  options={postgraduationspecialization.map((item) => ({
                    value: item.specializationId,
                    label: item.specializationName,
                  }))}
                  onClick={handlepostgraduationspec}
                ></Select>
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Require To Work In Shift:
              </label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="shift"
                    value="option1"
                    onClick={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        requiredtoworkinshifts: e.target.value,
                      })
                    }
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="shift"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-2 col-form-lable">
                Other Qualification:
              </label>
              <div className="col-sm-3">
                <input type="text" onChange={handleotherqualification} />
                {/* <Select
                  isMulti
                  options={othergraduationdata.map((item) => ({
                    value: item.othergraduationId,
                    label: item.othergraduationName,
                  }))}
                  onChange={handleotherqualification}
                ></Select> */}
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Passport:</label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="pass"
                    value="option1"
                    onClick={() => setPassport(false)}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="pass"
                    value="option1"
                    onClick={() => setPassport(true)}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-2 col-form-lable">
                Other Specialization:
              </label>
              <div className="col-sm-3">
                <input type="text"  onChange={handleotherspecialization} />
                {/* <Select
                  isMulti
                  options={othergraduationspecialization.map((item) => ({
                    value: item.otherId,
                    label: item.otherName,
                  }))}
                  onChange={handleotherspecialization}
                ></Select> */}
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">VISA Available:</label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="visa"
                    value="option1"
                    disabled={Passport}
                    onClick={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        visaavailable: e.target.value,
                      })
                    }
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="visa"
                    value="option1"
                    disabled={Passport}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-2 col-form-lable">*Positions: </label>
              <div className="col-sm-1">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      position: e.target.value,
                    })
                  }
                />
              </div>

              <label className="col-sm-3 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Approver Employee ID:
              </label>

              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Sales Order No:</label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      salesorderno: e.target.value,
                    })
                  }
                />
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Approver Employee Name:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <label className="col-sm-2 col-form-lable">JRs No:</label>
              <div className="col-sm-1">
                <input type="text" className="form-control form-control-sm" />
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Approved on:</label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                />
              </div>
              <label className="col-sm-1 col-form-lable"></label>

              <label className="col-sm-2 col-form-lable">
                Ready To Relocate:
              </label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="abc"
                    value="option1"
                    onClick={() => setRelocate(true)}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="abc"
                    value="option1"
                    onClick={() => setRelocate(false)}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Attach JD Document:
              </label>
              <div className="col-sm-3">
                <div className="custom-file-input">
                  <input
                    type="file"
                    name=""
                    id=""
                    className="custom-control-file custom file lable"
                  />
                </div>
              </div>

              <label className="col-sm-2 col-form-lable">
                If No To Relocate/Days:
              </label>
              <div className="col-sm-1">
                <input
                  type="number"
                  className="form-control form-control-sm"
                  disabled={relocate}
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      relocateindays: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />

            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-lable"></label>
              <button
                className="col-sm-1 btn-outline-warning btn-sm "
                onClick={() => handlesave(resourcedata)}
              >
                SAVE
              </button>
              <label className="col-sm-1 col-form-lable"></label>
              <button className="col-sm-1 btn-outline-success btn-sm ">
                Submit
              </button>
              <label className="col-sm-4 col-form-lable"></label>
              <button className="col-sm-1 btn-outline-danger btn-sm ">
                Delete
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};