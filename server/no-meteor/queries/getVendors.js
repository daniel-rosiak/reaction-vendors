import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name vendors
 * @method
 * @memberof Vendor/NoMeteorQueries
 * @summary Query the Product collection to get the vendors
 * @param {Object} context - An object containing the per-request state
 * @return {Promise<Object>|undefined} - One or more vendors
 */
export default async function getVendors(context) {
  const { Products } = context.collections;

  const vendors = await Products.distinct("vendor", { "vendor": { $ne: null } });

  if (!vendors.length) {
    throw new ReactionError("not-found", "There is no vendors to show");
  }

  return vendors.map(vendor => ({ name: vendor }));
}
