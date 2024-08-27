import { Form, Formik, Field } from "formik";
import { useState } from "react";
import { server } from "@/config/index";
import DrugItem from "@/components/DrugItem";
import InteractionTable from "@/components/InterationTable";
import MyLoader from "@/components/MyLoader";
import styles from "@/styles/Header.module.css"

const INTERACTION_EXAMPLE = [
  {id: 1, name: "Aluminum hydroxide"},
  {id: 2, name: "Dolutegravir"},
  {id: 3, name: "Aprepitant"},
  {id: 4, name: "Abacavir"},
  {id: 5, name: "Orlistat"},
  {id: 6, name: "Dexamethasone"},
]

export default function Home({names}) {
  const [id, setId] = useState(0);
  const [drugList, setDrugList] = useState([]);
  const [interactionTable, setInteractionTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const submitList = async () => {
    setIsLoading(true);

    // To api call
    try {
      const result = await fetch(`${server}/api/getInteraction`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          drugList: drugList,
        }),
      });

      const res = await result.json();
      const interactions = res.interactions;

      // set Table
      setInteractionTable(interactions);
    } catch (error) {
      console.log("Error occured: ", error);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const onDeleteHandler = (id) => {
    setDrugList(drugList.filter((drug) => drug.id !== id));
  };

  const addDrugHandler = (values) => {
    const drugObj = { id: id, name: values.name };
    const newDrugList = drugList.concat(drugObj);

    setId(id + 1);
    setDrugList(newDrugList);
  };

  const handleResetClick = () => {
    setDrugList([]);
  }

  const handleLoadExampleClick = () => {
    setDrugList(INTERACTION_EXAMPLE);
  }

  return (
    <main className="col container mb-5 mt-3">
      <div className="row text-center">
        <h2 className={styles.myheading}>My Drug List</h2>
      </div>

      <div className="row justify-content-md-center my-3">
        <div className="card border-secondary">
          <div className="card-body">
            <Formik initialValues={{ name: "" }} onSubmit={addDrugHandler}>
              <Form>
                <Field as="select" name="name">
                  {names.map((name, index) => <option key={index} value={name}>{name}</option>)}
                </Field>

                <div className="col-12 ms-5 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Add Drug
                  </button>
                  <button type="button" className="btn btn-primary mx-2" onClick={handleResetClick}>
                    Reset List
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleLoadExampleClick}>
                    Load Example
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      <ul className="list-group row">
        {drugList.map((drug) => (
          <DrugItem key={drug.id} drug={drug} onClick={onDeleteHandler} />
        ))}
      </ul>

      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary px-3" onClick={submitList}>
          Check Interactions
        </button>
      </div>

      <div className="d-flex justify-content-center">
        {isLoading && <MyLoader />}
      </div>
      
      {!isLoading && interactionTable.length === 0 && (
        <div className="alert alert-warning mt-3" role="alert">
          <b className="fw-bold">
            No Interactions were found
          </b>
        </div>
      )}

      {!isLoading && interactionTable.length !== 0 && (
        <InteractionTable interactionTable={interactionTable} />
      )}

      {!isLoading && interactionTable.length !== 0 && (
        <div className="alert alert-warning mt-3" role="alert">
          *Note: <b className="fw-bold">
            Unknown interaction means there might be an interaction between the
            drugs but with unknown severity.
          </b>
        </div>
      )}
    </main>
  );
}


const getDrugNames = async () => {
  // To api call
  try {
    const result = await fetch(`${server}/api/getDrugNames`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    });

    const res = await result.json();
    const names = res.names;
    console.log("names = ", names);

    return names;

  } catch (error) {
    console.log("Error occured: ", error);
  }
};

export async function getStaticProps() {
  const names = await getDrugNames();
  console.log("names = ", names);

  return {
    props: {
      names,
    },
  };
}
