import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getColors, adjustColors } from "../state/color/colorActions";
import { CategoryColor } from "../models/categoryColor";
import { Color } from "../models/color";
import { RootStore } from "../store";

import { useTranslation } from "react-i18next";
import {
  FormGroup,
  Button,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@material-ui/core";
import { Formik, Form, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import Navbar from "../components/navbar";

const styles = {
  formGroupStyle: { marginBottom: 20 },
  container: {
    width: "70%",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "15%",
    marginRight: "15%",
  },
  errorMsg: {
    color: "tomato",
  },
};

export default function Gallery() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const colors = useSelector((state: RootStore) => state.colors);

  useEffect(() => {
    // call from action for the first time
    dispatch(getColors());
  }, []);

  console.log("in home pages ", colors);

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={{ marginBottom: 30 }}>
          <h1>{t("titleForm")}</h1>
          <Formik
            initialValues={{ category: 0, saturated: "1", darker: false }}
            onSubmit={(values: any) => {
              console.log(values);
              dispatch(adjustColors(values));
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <FormGroup style={styles.formGroupStyle}>
                  <FormLabel>{t("chooseCategory")}</FormLabel>
                  <Select
                    native
                    value={values.category}
                    onChange={handleChange}
                    inputProps={{
                      name: "category",
                      id: "category",
                    }}
                  >
                    <option value={0}>All</option>
                    {colors.colors.map((primaryColor: CategoryColor) => (
                      <option key={primaryColor.id} value={primaryColor.id}>
                        {primaryColor.category}
                      </option>
                    ))}
                  </Select>
                </FormGroup>

                <FormGroup style={styles.formGroupStyle}>
                  <FormLabel>{t("saturationProperty")}</FormLabel>
                  <RadioGroup
                    aria-label="saturated"
                    name="saturated"
                    value={values.saturated}
                    onChange={handleChange}
                  >
                    <div style={{ flexDirection: "row" }}>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="All"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="Choose Saturation"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disabled={parseInt(values.saturated) == 1}
                            name="darker"
                            onChange={handleChange}
                          />
                        }
                        label="Darker"
                      />
                    </div>
                  </RadioGroup>
                </FormGroup>

                <Button variant="contained" color="secondary" type="submit">
                  Submit
                </Button>

                {/* <pre>{JSON.stringify(values, null)}</pre> */}
              </Form>
            )}
          </Formik>
        </div>
        <div style={{ display: "flex" }}>
          {colors.colors.map((primaryColor: CategoryColor) => (
            <div
              key={primaryColor.id}
              style={{
                width: "100%",
                height: 30,
                textAlign: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {primaryColor.childColor.map((secondaryColor: Color) => (
                <div
                  key={secondaryColor.id}
                  style={{
                    flex: 1,
                    height: "100%",
                    backgroundColor: secondaryColor.color,
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
