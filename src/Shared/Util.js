const { v4: uuidv4 } = require('uuid');
const generator = require('generate-password');
//const {Base64} = require('js-base64');

let GetUpdateExpressionAndAttributeValuesAndNames = (obj, type) => {
    let result = {};
    result.expression = 'set ';
    result.names = {};
    result.attributeValues = {};
    if (IsHasValue(obj)) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (i === 0) result.expression = (type === 0 ? '' : 'set ');
            result.expression = result.expression + (type === 0 ? '#' : '') + keys[i] + ' = :' + keys[i];

            result.attributeValues[':' + keys[i]] = obj[keys[i]];
            result.names['#' + keys[i]] = keys[i];

            if (i < keys.length - 1) result.expression = result.expression + ', ';
        }
    }
    return result;
};

let GetKey = (key, value) => {
    let _key = {};
    _key[key] = value;
    return _key;
};


let GetEmailKey = (email) => {
    if(IsHasValue(email)){
        email = ReplaceAll(ReplaceAll(email, '.',''), '@','');
    }
    return email;
};

let GetNewKey = (type) => {
    let _key = uuidv4();
    let newKey = _key;
    if (IsHasValue(type)) {
        newKey = type + '0' + _key;
    } else {
        newKey = _key;
    }
    return newKey;
};

let GetKeyNameFromObject = (obj, value) => {
    var keys = Object.keys(obj);
    return keys[value];
}

let ReturnObject = (callback, err, data, methodName) => {
    if (err) {
        callback(null, 'Error on ' + methodName + ': ' + JSON.stringify(err));
    } else {
        if (IsHasValue(data)) {
            if (IsHasValue(data.Item)) { return callback(SortByCreatedOn(data.Item), null); }
            if (IsHasValue(data.Attributes)) { return callback(SortByCreatedOn(data.Attributes), null); }
            if (IsHasValue(data)) { return callback(SortByCreatedOn(data), null); }
        } else {
            return callback(null, 'Error on ' + methodName);
        }
    }
};

let ReplaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
};

let IsHasValue = (data) => {
    if (data !== null && data !== undefined && data !== '') {
        return true;
    }
    return false;
};

let GetLookUpData = (dataList, idCoulmn, dataLabel, selectedValue, dependentColumn) => {
    let result = { list: [], label: '' };
    let _isSelected = false;
    dataList.forEach(l => {
        _isSelected = ((l[idCoulmn] === selectedValue) ? true : false);
        if (_isSelected === true) {
            result.label = l[dataLabel];
        }

        result.list.push(
            {
                label: l[dataLabel],
                value: l[idCoulmn],
                isSelected: _isSelected,
                dependent: IsHasValue(dependentColumn) ? l[dependentColumn] : ""
            }
        )
    });
    return result;
}

let AddDetaultValues = (tableData, keyColumn, type, created_by) => {
    tableData[keyColumn] = GetNewKey(type);
    if (IsHasValue(created_by)) {
        tableData['created_by'] = created_by;
    }
    tableData['created_on'] = GetDate();
    tableData['status'] = true;
    return tableData;
}

let UpdateDetaultValues = (tableData, modified_by) => {
    if (IsHasValue(modified_by)) {
        tableData['modified_by'] = modified_by;
    }
    tableData['modified_on'] = GetDate();
    return tableData;
}

let SortByCreatedOn = (tableData) => {
    return tableData;
}

let AppendLeadingZeroes = (n) => {
    if (n <= 9) {
        return "0" + n;
    }
    return n
}

let GetDate = () => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear() + "-"
        + months[current_datetime.getMonth()] + "-"
        + AppendLeadingZeroes(current_datetime.getDate()) + " "
        + AppendLeadingZeroes(current_datetime.getHours()) + ":"
        + AppendLeadingZeroes(current_datetime.getMinutes()) + ":"
        + AppendLeadingZeroes(current_datetime.getSeconds())
    return formatted_date;
}

let EnCode = (data) => {
    //return Base64.encode(data);
    return (data);
}

let DeCode = (data) => {
    //return Base64.decode(data);
    return (data);
}

let CreatePassword = (password, password_salt) => {
    //return Base64.encode(password + password_salt);
    return password;
};

let ComparePassword = (password, password_salt, sys_password) => {
    //return Base64.encode(password + password_salt) === sys_password ? true : false;
    return password === sys_password ? true : false;
};

let CreateRandomPassword = () => {
    return generator.generate({
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true
    });
};

let CreatePasswordSalt = () => {
    return generator.generate({
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true
    });
};

let GetFileExtn = (fileName) => {
    return fileName.slice((Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1);
}

module.exports = {
    GetLookUpData, GetDate, SortByCreatedOn, IsHasValue, GetUpdateExpressionAndAttributeValuesAndNames, ReplaceAll,
    ReturnObject, GetKey, GetNewKey, AddDetaultValues, UpdateDetaultValues, CreateRandomPassword, CreatePassword, CreatePasswordSalt,
    ComparePassword, GetKeyNameFromObject, EnCode, DeCode, GetFileExtn, GetEmailKey
};