// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!
/**
 * An empty query to start from
 */
export function fetchExampleQuery(
  variables: {},
  accessToken?: string
): Promise<
  {/**
  * Any data retrieved by the function will be returned here
  */
  "data": {
        "gitHub": {
        /**
  * Lookup a given repository by the owner and repository name.
  */
  "repository": {
        /**
  * Returns a list of contact links associated to the repository
  */
  "contactLinks": Array<{
        /**
  * The contact link purpose.
  */
  "about": string, /**
  * The contact link name.
  */
  "name": string, /**
  * The contact link URL.
  */
  "url": any
    }>, /**
  * The number of kilobytes this repository occupies on disk.
  */
  "diskUsage": number, /**
  * Returns how many forks there are of this repository in the whole network.
  */
  "forkCount": number
    }
    }
    }, /**
  * Any errors in the function will be returned here
  */
  "errors": Array<any>}
>;

/**
 * An example query to start with.
 */
export function fetchExampleQuery(
  variables: {},
  accessToken?: string
): Promise<
  {/**
  * Any data retrieved by the function will be returned here
  */
  "data": {
        /**
  * Internal GraphQL field
  */
  "__typename": any
    }, /**
  * Any errors in the function will be returned here
  */
  "errors": Array<any>}
>;
