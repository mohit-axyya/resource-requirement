import axios from "axios";
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const ResourceForm = () => {

    const loginEmployeeData = useLocation();
    
    const [resourceRequisitionData, setResourceRequisitionData] = useState({});
    const [hiringTypeData, setHiringTypeData] = useState([]);
    const [typeOfDeveloper, setTypeOfDeveloper] = useState([]);
    const [technologyData, setTechnologyData] = useState([]);
    const [technologySpecialization, setTechnologySpecialization] = useState([]);
    const [domainData, setDomainData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [qualificationData, setQualificationData] = useState([]);
    const [graduationData, setGraduationData] = useState([]);
    const [graduationSpecializationData, setGraduationSpecializationData] = useState([]);
    const [postGraduationData, setPostGraduationData] = useState([]);
    const [postGraduationSpecialization, setPostGraduationSpecialization] = useState([]);
    const [workInShifts, setWorkInShifts] = useState(false);
    const [passportData, setPassportData] = useState(false);
    const [visaData, setVisaData] = useState(false);
    const [readyToRelocate, setReadyToRelocate] = useState(false);

    
    console.log("resource object", resourceRequisitionData)
    console.log("hiring type ", hiringTypeData)
    
    const readyToRelocateDisable = readyToRelocate;
    const getEmployeeDataAndSetInResourceRequisition = async () => {
        setResourceRequisitionData({...resourceRequisitionData, resEmployeeId: loginEmployeeData.state.employeeId})
    }
    const getApproverDetailsAndSetInResourceRequisistion = async () => {
        setResourceRequisitionData({...resourceRequisitionData, resManagerId: loginEmployeeData.state.managerId}) 
        setResourceRequisitionData({...resourceRequisitionData, resManagerName: loginEmployeeData.state.managerName}) 
    }
    const getHiringData = async () => {
        const hiringdata = await axios.get("http://localhost:8080/api/hiringType");
        setHiringTypeData(hiringdata.data);    
    }

    const getTypeOfDeveloper = async () => {
        let typeOfDev = await axios.get("http://localhost:8080/api/viewResource");
        setTypeOfDeveloper(typeOfDev.data);
    }

    const getDomainData = async (event) => {
        const domaindata = await axios.get("http://localhost:8080/api/viewdomains");
        setDomainData(domaindata.data);
    }

    const getCountryData = async () => {
        const countrydata = await axios.get("http://localhost:8080/api/country");
        setCountryData(countrydata.data);
    }

    const getQualificationData = async (event) => {
        const qualificationdata = await axios.get("http://localhost:8080/api/qualification");
        setQualificationData(qualificationdata.data);       
    }
    const getPostGraduationData = async (event) => {
        const postgraduationdata = await axios.get("http://localhost:8080/api/viewQualificationDegree/3");
        setPostGraduationData(postgraduationdata.data);
    }
    useEffect(() => {
        getTypeOfDeveloper();
        getDomainData();
        getEmployeeDataAndSetInResourceRequisition();
        getApproverDetailsAndSetInResourceRequisistion();
    }, []);

    const handleHiringData = async( event ) => {
        let selectedHiringType = hiringTypeData.filter((key, object) => {
            if(key.hiringTypeId == event.target.value) {
                return true;
            } 
            return false;
        })
        setResourceRequisitionData({...resourceRequisitionData, resHiringTypeData : selectedHiringType}) 
    }
    const handleTypeOfDeveloper = async (event) => {
        let { options } = event.target;
        let tech = options.selectedIndex;
        let technologydata = await axios.get(`http://localhost:8080/api/viewTechnology/${tech}`);
        setTechnologyData(technologydata.data);
        setResourceRequisitionData({...resourceRequisitionData, resTypeOfDeveloper: event.target.value})       
    }

    const handleTechnology = async (event) => {
        let { options } = event.target;
        let techSpecialization = [...options].filter(x => x.selected).map(x => x.value);
        let techCheck = techSpecialization.filter(el => typeof el !== 'number').join(' ')
    
        const skillsData = await axios.get(`http://localhost:8080/api/viewSkills/${techCheck}`);
        setTechnologySpecialization(skillsData.data)
        setResourceRequisitionData({...resourceRequisitionData, resTechnology : techCheck}) 
    }

    const handleCountryData = async (event) => {
        let selectedCountry = countryData.filter((key, object) => {
            if(key.countryId == event.target.value) {
                return true;
            } 
            return false;
        })
        setResourceRequisitionData({...resourceRequisitionData, resCountryData : selectedCountry }) 
    }

    const handleStateData = async (event) =>{
        let stateid = resourceRequisitionData.resCountryData[0].countryId;
        const statedata = await axios.get(`http://localhost:8080/api/country/state/${stateid}`);
        setStateData(statedata.data)
        let selectedState = stateData.filter((key, object) => {
            if(key.stateId == event.target.value) {
                return true;
            } 
            return false;
        })
        setResourceRequisitionData({...resourceRequisitionData, resStateData : selectedState}) 
    }

    const handleCityData = async (event) => {
        let cityid = resourceRequisitionData.resStateData;
        const citydata = await axios.get(`http://localhost:8080/api/country/state/city/${cityid}`);
        setCityData(citydata.data);
        let selectedCity = cityData.filter((key, object) => {
            if(key.cityId == event.target.value) {
                return true;
            } 
            return false;
        })
        setResourceRequisitionData({...resourceRequisitionData, resCityData : selectedCity}) 
    }
    const handleGraduation = async (event) => {
        let qualificationid = resourceRequisitionData.resQualification;
        const graduationdata = await axios.get(`http://localhost:8080/api/viewQualificationDegree/${qualificationid}`);
        setGraduationData(graduationdata.data);
    }

    const handleGrduationSpecialization = async () => {
        let graduationid = resourceRequisitionData.resGraduation;
        const graduationspecializationdata = await axios.get(`http://localhost:8080/api/viewQualificationSpecialization/${graduationid}`);
        setGraduationSpecializationData(graduationspecializationdata.data);
    }
    const handlePostGraduationSpecialization = async () => {
        let postgraduationspecializationid = resourceRequisitionData.resPostGraduation;
        let postgraduationspecializationdata = await axios.get(`http://localhost:8080/api/viewQualificationSpecialization/${postgraduationspecializationid}`);
        setPostGraduationSpecialization(postgraduationspecializationdata.data);
    }
    const handleSave = async (event) => {

        event.preventDefault();
        const url = "http://localhost:8080/api/saveResourceRequirement/";
        const reqData = {
                employee : loginEmployeeData.state,
                hiringType : hiringTypeData.data,
                createdOn : resourceRequisitionData.resCreatedOn,
                country : resourceRequisitionData.resCountryId,
                state : resourceRequisitionData.resStateData,
                city : resourceRequisitionData.resCityData,
                relocationState : resourceRequisitionData.resReadyToRelocate,
                
                passportStatus : resourceRequisitionData.resPassportData,
                visa : resourceRequisitionData.resVisaData,
                positions : resourceRequisitionData.resPositions,
                experience : resourceRequisitionData.resYearsOfExp,
                resourceType : typeOfDeveloper.data,
                technologies : technologyData.data,
                skills : technologySpecialization.data,
                domainKnowledges : resourceRequisitionData.resDomainKnowledge,
                salesOrderNo : resourceRequisitionData.resSalesOrderNo,
                noOfJRs : resourceRequisitionData.resSalesOrderNo,
                jobDescriptionDoc : resourceRequisitionData.resJRno,
                qualification : qualificationData.data,
                qualificationDegree : graduationData.data,
                qualificationSpecialization : graduationSpecializationData.data,
                approverId : resourceRequisitionData.resManagerId,
                approverName : resourceRequisitionData.resManagerName,
                approvedDate : resourceRequisitionData.resApprovedDate
        }
        const resourceResult =await axios.post(url,  reqData);
    }
    return (
        <>
            <div className="bg-gray-800">
                <div className="h-16 px-8 flex items-center">
                    <p className="text-white font-bold">Resource Requirement <span className='text-red-500'></span></p>
                </div>
            </div>
            <div className="px-5 py-5">
                <div className="shadow rounded p-10 mx-20">
                    <div className="flex justify-center font-bold text-4xl tracking-wider"><h1>Resource Requisition</h1></div>
                    <div className="flex justify-end semi-bold text-2xl"><h1>Birla<span className="text-red-500">Soft</span></h1></div>
                    <hr></hr>
                    <div className="relative mt-3 h-10">
                    <div className="absolute left-0 top-0 ">
                            <button className="mx-40 bg-green-600 text-white hover:bg-green-500 rounded w-20 h-8 border">New</button>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-40 text-blue-700">Search Request No</label>
                            <input className="px-2 py-1 text-grey-600 rounded border w-12" type="text"/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="mx-1 text-blue-700">Employee Id</label>
                            <input className="mx-5 px-2 py-1 text-grey-600 rounded border" value={loginEmployeeData.state.employeeId}type="text" 
                            disabled/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-12 px-2 text-blue-700">Created On</label>
                            <input className="px-2 py-1 text-grey-600 rounded border w-40" type="date"
                            onChange={(e) => 
                                setResourceRequisitionData({...resourceRequisitionData, resCreatedOn: e.target.value})
                                }/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="mx-2 text-blue-700">Employee Name</label>
                            <input className="px-2 py-1 mx-2 text-grey-600 rounded border" value={loginEmployeeData.state.employeeName} type="text" disabled/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-40 text-blue-700">Years of Experience</label>
                            <input className="px-2 py-1 text-grey-600 rounded border w-12" type="number" 
                            onChange={(e) => 
                                setResourceRequisitionData({...resourceRequisitionData, resYearsOfExp: e.target.value})
                                }/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0">
                            <label className="mx-2 text-blue-700">Hiring Type</label>
                            <select defaultValue={'select hiring type'} id="countries" className="ml-10 px-2 py-1 text-grey-600 rounded border w-52"
                                onClick={getHiringData}
                                onChange={handleHiringData} >
                                <option value="select hiring type">select hiring type</option>
                                {hiringTypeData.map((item) => {
                                    return (
                                        <option id={item.hiringTypeId} value={item.hiringTypeId}>{item.hiringType}</option>
                                    );
                                })}
                                    
                            </select>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-6 px-2 text-blue-700">Type of Developer</label>
                            <select defaultValue={'select developer'} className="w-48 h-10 text-grey-600 rounded border"
                            onChange={handleTypeOfDeveloper} multiple>
                                <option value="select developer" className="flex justify-center">select developer</option>
                                {typeOfDeveloper.map((items) => {
                                    return ( <option  className="flex justify-center"
                                        key={items.resourceTypeId} id={items.resourceTypeId} value={items.resourceTypeId}>{items.resourceType}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Requested By</label>
                            <input className="px-2 mx-5 py-1 text-grey-600 rounded border" type="text"/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Technology</label>
                            <select defaultValue={'select technology'} className="w-48 h-10 text-grey-600 rounded border" multiple
                            onChange={handleTechnology}>
                                {technologyData.map((tech, key) => {
                                    return (<option className="flex justify-center"
                                        key={tech.technologyId} id={tech.technologyId} value={tech.technologyId}>{tech.technology}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Domain Knowledge</label>
                            <select defaultValue={'select domain'} className="w-48 h-10 text-grey-600 rounded border" multiple
                            onChange={(event) => {
                                setResourceRequisitionData({...resourceRequisitionData, resDomainKnowledge: event.target.value})
                            }}>
                                <option value="select domain" className="flex justify-center">select domain</option>
                                {domainData.map((tech) => {
                                    return (<option className="flex justify-center"
                                      key={tech.domainId}  id={tech.domainId} value={tech.domainId}>{tech.domainKnowledge}</option>);
                                })}
                            </select>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Technology Specialization</label>
                            <select defaultValue={'select specialization'} className="w-48 h-10 text-grey-600 rounded border" multiple
                            onChange={(event) => {
                                let { options } = event.target;
                                let techSpecialization = [...options].filter(x => x.selected).map(x => x.value);
                                let techspec = techSpecialization.filter(el => typeof el !== 'number').join(' ')
                                setResourceRequisitionData({...resourceRequisitionData, resTechnologySpecializationData : techspec})
                            }}>
                                {technologySpecialization.map((item) => {
                                    return ( <option className="flex justify-center" key={item.skillId} id={item.skillId} value={item.skillId}>
                                        {item.skill}
                                    </option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Country</label>
                            <select defaultValue={'select country'} id="countries" className="mx-20 px-2 py-1 text-grey-600 rounded border w-52"
                            onClick={getCountryData} onChange={handleCountryData}>
                                <option value='select country' selected >select country</option>
                                {countryData.map((country) => {
                                    return ( <option key={country.countryId} id={country.countryId} value={country.countryId}>{country.countryName}</option>);
                                })}
                            </select>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="px-2 text-blue-700">Qualification</label>
                            <select className="px-2 py-1 text-grey-600 rounded border w-48" onClick={getQualificationData}
                            onChange={(event) =>{
                                setResourceRequisitionData({...resourceRequisitionData, resQualification: event.target.value});
                            }}>
                                <option value="">Select Qualification</option>
                                {qualificationData.map((qualification) => {
                                    return ( <option key={qualification.qualificationId} id={qualification.qualificationId} value={qualification.qualificationId}>{qualification.qualification}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">State</label>
                            <select defaultValue={''} id="states" className="ml-24 px-2 py-1 text-grey-600 rounded border w-52"
                            onClick={handleStateData}>
                                <option value='' selected >select state</option>
                                {stateData.map((statedata) => {
                                    return ( <option key={statedata.stateId} id={statedata.stateId} value={statedata.stateId}>{statedata.stateName}</option>);
                                })}
                            </select>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Graduation</label>
                            <select className="px-2 py-1 text-grey-600 rounded border w-48" onClick={handleGraduation}
                            onChange={(event) =>{
                                setResourceRequisitionData({...resourceRequisitionData, resGraduation: event.target.value});
                            }}>
                                <option value="">Select Graduation</option>
                                {graduationData.map((graduation) => {
                                    return ( <option key={graduation.degreeId} id={graduation.degreeId} value={graduation.degreeId}>{graduation.degreeName}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="mr-2 text-blue-700">City</label>
                            <select defaultValue={''} id="cities" className="ml-24 px-2 py-1 text-grey-600 rounded border w-52"
                            onClick={handleCityData} >
                                <option value='' selected >select city</option>
                                {cityData.map((city)=> {
                                    return (<option key={city.cityId} id={city.cityId} value={city.cityId}>{city.cityName}</option>);
                                })}
                            </select>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Graduation Specialization</label>
                            <select className="px-2 py-1 text-grey-600 rounded border w-48" onClick={handleGrduationSpecialization}
                            onChange={(event) =>{
                                setResourceRequisitionData({...resourceRequisitionData, resGraduationSpecialization: event.target.value});
                            }}>
                                <option value="">Select Graduation Specialization</option>
                                {graduationSpecializationData.map((graduationspec) => {
                                    return ( <option key={graduationspec.specializationId} id={graduationspec.specializationId} value={graduationspec.specializationId}>{graduationspec.specializationName}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-0 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700"><span className="block">Resource</span> Available Date</label>
                            <input className="px-2 ml-10 w-52 py-1 text-grey-600 rounded border" type="date"/>
                        </div>
                        <div className="absolute mt-3 top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Post-Graduation</label>
                            <select className="px-2 py-1 text-grey-600 rounded border w-48" onClick={getPostGraduationData}
                            onChange={(event) =>{
                                setResourceRequisitionData({...resourceRequisitionData, resPostGraduation: event.target.value});
                            }}>
                                <option value="">Select Post Graduation</option>
                                {postGraduationData.map((postgrad) => {
                                    return ( <option key={postgrad.degreeId} id={postgrad.degreeId} value={postgrad.degreeId}>{postgrad.degreeName}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-4 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">TimeZone Shifts</label>
                            <input className="px-2 mx-4 mt-2 py-1 text-grey-600 rounded border" type="text"/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Post-Graduation Specialization</label>
                            <select className="px-2 py-1 text-grey-600 rounded border w-48" onClick={handlePostGraduationSpecialization}
                            onChange={(event) =>{
                                setResourceRequisitionData({...resourceRequisitionData, resPostGraduationSpecialization: event.target.value});
                            }}>
                                <option value="">Select Post Graduation Specialization</option>
                                {postGraduationSpecialization.map((postgradspec) => {
                                    return ( <option key={postgradspec.specializationId} id={postgradspec.specializationId} value={postgradspec.specializationId}>{postgradspec.specializationName}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Work In Shifts</label>
                            {/* <input className="px-2 py-1 ml-10 mr-3 text-grey-600 rounded border worksinshifts/draft" type="radio"/><label>Yes</label>
                            <input className="px-2 py-1 ml-10 mr-3 text-grey-600 rounded border worksinshifts-checked/draft:text-sky-500" type="radio"/><label>No</label> */}
                              <input className="peer/yes px-2 py-1 ml-10 mr-3" type="radio" value="true" name="workinshifts" 
                                onClick={() =>  {
                                    setWorkInShifts(true);
                                    setResourceRequisitionData({...resourceRequisitionData, resWorkInShifts: true});
                                    }}/>
                                <label className="peer-checked/yes:text-red-500">Yes</label>

                                <input className="peer/no px-2 py-1 ml-10 mr-3" type="radio" value="false" name="workinshifts" 
                                onClick={() =>  {
                                    setWorkInShifts(false);
                                    setResourceRequisitionData({...resourceRequisitionData, resWorkInShifts: false});
                                    }}/>
                                <label className="peer-checked/no:text-red-500">No</label>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Other Qualification</label>
                            <input className="px-2 py-1 text-grey-600 rounded border " type="text"
                            onChange={(event) =>  {
                                setResourceRequisitionData({...resourceRequisitionData, resOtherQualification: event.target.value});
                                }}/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Passport</label>
                            <input className="peer/yes px-2 ml-20 py-1 mr-3 ml-10" type="radio" value="true" name="passportstatus" 
                                onClick={() =>  {
                                    setPassportData(true);
                                    setResourceRequisitionData({...resourceRequisitionData, resPassportData: true});
                                    }}/>
                                <label className="peer-checked/yes:text-red-500">Yes</label>

                                <input className="peer/no px-2 py-1 ml-10 mr-3" type="radio" value="false" name="passportstatus" 
                                onClick={() =>  {
                                    setPassportData(false);
                                    setResourceRequisitionData({...resourceRequisitionData, resPassportData: false});
                                    }}/>
                                <label className="peer-checked/no:text-red-500">No</label>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Other Specialization</label>
                            <input className="px-2 py-1 text-grey-600 rounded border " type="text"
                            onChange={(event) =>  {
                                setResourceRequisitionData({...resourceRequisitionData, resOtherSpecialization: event.target.value});
                                }}/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Visa Available</label>
                            {/* <input className="px-2 mx-5 py-1 text-grey-600 rounded border" type="text"/> */}
                            <input className="peer/yes px-2 ml-11 py-1 mr-3" type="radio" value="true" name="visastatus" disabled={!passportData}
                                onClick={() =>  {
                                    setVisaData(true);
                                    setResourceRequisitionData({...resourceRequisitionData, resVisaData: true});
                                    }}/>
                                <label className="peer-checked/yes:text-red-500">Yes</label>

                                <input className="peer/no px-2 py-1 ml-10 mr-3" type="radio" value="false" name="visastatus" disabled={!passportData}
                                onClick={() =>  {
                                    setVisaData(false);
                                    setResourceRequisitionData({...resourceRequisitionData, resVisaData: false});
                                    }}/>
                                <label className="peer-checked/no:text-red-500">No</label>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mr-20 px-2 text-blue-700" >Positions</label>
                            <input className="ml-24 px-2 py-1 text-grey-600 rounded border w-12" type="number" 
                            onChange={(event) =>  {
                                setVisaData(false);
                                setResourceRequisitionData({...resourceRequisitionData, resPositions: event.target.value});
                                }}/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Approver Id</label>
                            <input className="px-2 mx-14 py-1 text-grey-600 rounded border" value={loginEmployeeData.state.managerId} type="text" disabled/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Sales Order No</label>
                            <input className="px-2 py-1 text-grey-600 rounded border " type="number"
                            onChange={(event) =>  {
                                setVisaData(false);
                                setResourceRequisitionData({...resourceRequisitionData, resSalesOrderNo: event.target.value});
                                }}/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Approver Name</label>
                            <input className="px-2 mx-4 py-1 text-grey-600 rounded border" value={loginEmployeeData.state.managerName} type="text" disabled/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">JR No.</label>
                            <input className="px-2 py-1 text-grey-600 rounded border " type="number"
                            onChange={(event) =>  {
                                setVisaData(false);
                                setResourceRequisitionData({...resourceRequisitionData, resJRno: event.target.value});
                                }}/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Approved On</label>
                            <input className="px-2 mx-5 py-1 text-grey-600 rounded border" type="date"
                            onChange={(event) =>  {
                                setResourceRequisitionData({...resourceRequisitionData, resApprovedDate: event.target.value});
                                }}/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-14 px-2 text-blue-700">Ready To Relocate</label>
                            {/* <input className="px-2 py-1 text-grey-600 rounded border " type="number"/> */}
                            <input className="peer/yes px-2 py-1 mr-3" type="radio" value="true" name="readytorelocatestatus" 
                                onClick={() =>  {
                                    setReadyToRelocate(true);
                                    setResourceRequisitionData({...resourceRequisitionData, resReadyToRelocate: true});
                                    }}/>
                                <label className="peer-checked/yes:text-red-500">Yes</label>

                                <input className="peer/no px-2 py-1 ml-10 mr-3" type="radio" value="false" name="readytorelocatestatus" 
                                onClick={() =>  {
                                    setReadyToRelocate(false);
                                    setResourceRequisitionData({...resourceRequisitionData, resReadyToRelocate: false});
                                    }}/>
                                <label className="peer-checked/no:text-red-500">No</label>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute left-0 top-0 ">
                            <label className="text-blue-700">Attach JD Document</label>
                            <input className="px-2 mx-2 py-1 text-grey-600 rounded border w-25" type="file"/>
                        </div>
                        <div className="absolute top-0 right-0">
                            <label className="mx-2 px-2 text-blue-700">Relocate Days</label>
                            <input className="px-2 py-1 text-grey-600 rounded border " type="number" disabled={readyToRelocateDisable}
                            onChange={(event) =>  {
                                setResourceRequisitionData({...resourceRequisitionData, resRelocateDays: event.target.value});
                                }}/>
                        </div>
                    </div>
                    <div className="relative mt-3 h-10">
                        <div className="absolute top-0 left-0">
                            <button className="mt-3 mx-20 bg-green-600 text-white hover:bg-green-500 rounded w-20 h-8 border"
                            onClick={handleSave}>Save</button>
                            <button className="mt-3 mx-10 bg-yellow-600 text-white hover:bg-yellow-500 rounded w-20 h-8 border">Submit</button>
                        </div>
                        <div className="absolute top-0 right-0">
                        <button className="mt-3 mx-40 bg-red-600 text-white hover:bg-red-500 rounded w-20 h-8 border">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ResourceForm;