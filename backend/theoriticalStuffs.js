/**
 * Hashing: way to convert string and number etc to random string and this won't be converted back
 * encryption: we give input+secret and convert to encrypted value which can't be read but can be converted back
 * salting: adding constent string to input and hashing it
 * encoding: Transforming the data so that it becomes compatible with other system
 * Serialization: convertion of complex data structures (like objects, lists etc.) into a linear format (like a string) for transportation
 * 
 * 
 * HTTPS errors code
 * 1XX: Informational or a provisional response
 * 2XX: Indicates clients sucessful requests
 * 3XX: Redirectional responses, further action required from user
 * 4XX: ClientSide error
 * 5XX: ServerSide error
 * 
 * 
 * Principles of Rest APIs
 * client-server architecture
 * statelessness
 * cacheability: Response from server can be cached at client side
 * layered system: Architecture can involve multiple layer for security and load balancing
 * code on demand(optional): server can send code to client to extend clien't functionality
 * uniform interface: all devices can access server with same url
 * Hypermedia: Links to different part of apis in same way as web page.
 * 
 * 
 * JWT Token(JSON WEB TOKENS): XXXX.YYYY.ZZZZ(Header.Payload.Signature)
 * Header: Info about encrypting algorithm and type of token
 * Payload: Also called claims(predefined claims-user Info,Public-defined at will by user,Private:To share info)
 * Signature: Optional, consist of encoded header, encoded payload and algorithm
 * 
 * 
 */

