/**
 * @name Query.getVendors
 * @method
 * @memberof Vendor/GraphQL
 * @summary Get a list of all vendors
 * @param {Object} _ unused
 * @param {Object} __ unused
 * @param {Object} context - An object containing the per-request state
 * @return {Promise<Object>|undefined} A Vendor object
 */
export default async function getVendors(_, __, context) {
  return context.queries.getVendors(context);
}
