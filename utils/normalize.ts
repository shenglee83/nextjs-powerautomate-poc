import React from "react";

const alphabetOnly = (e: React.FormEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value;
  e.currentTarget.value = value
    .toUpperCase()
    .replace(/[^\D]/g, "")
    .replace(/\s\s+/g, " ");
  return e.currentTarget.value;
};

const nric = (e: React.FormEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value;
  if(!value) {
    return e.currentTarget.value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  e.currentTarget.value = value
  .replace(/-/g, "").length >= 12 ? `${onlyNums.slice(0,6)}-${onlyNums.slice(6,8)}-${onlyNums.slice(8,12)}` : value; 

  return e.currentTarget.value;
}

const numberOnly = (e: React.FormEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value;
  
  return e.currentTarget.value;
}

export default {alphabetOnly, nric};