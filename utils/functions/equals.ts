function equals(string1: string, string2: string, caseInSensitive = true) {
    if (caseInSensitive) return string1?.toString().toLowerCase() === string2?.toString().toLowerCase();
    return string1?.toString() === string2?.toString();
}

export default equals;
