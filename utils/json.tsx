import "lodash/common/string";
import {Person} from "../data/Person";

export const objectKeysToCamelCase = (object: Object) => {
    const camelCaseObject: Person;
    _.forEach(
        object,
        function(value: Object, key: string) {
            if (_.isPlainObject(value) || _.isArray(value)) {     // checks that a value is a plain object or an array - for recursive key conversion
                value = objectKeysToCamelCase(value);               // recursively update keys of any values that are also objects
            }
            let newKey = _.camelCase(key);
            if (typeof value === "string") {
                camelCaseObject[newKey as keyof Person] = value;
            }
        }
    )
    return camelCaseObject;
};
