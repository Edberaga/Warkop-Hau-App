export const typeErrorMessage = (propName, type, className = null) => {
    const classDescriptor = className == null ? '' : ` of ${className} `;
    return `TypeError: ${propName}${classDescriptor} is not of type ${type}`;
}