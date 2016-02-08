global class jsonimal {
	public jsonimal() {

	}

	public string cleanJson(SObjectType objType, String jsonString){
		Map<String, Object> dirtyMap = (Map<String,Object>)JSON.deserializeUntyped(jsonString);
		Map<String, Object> cleanMap = new Map<String, Object>();

		//get the fields that actually exist
		Map<String,Schema.SObjectField> objFields = objType.getDescribe().fields.getMap();
		Map<String, String> localizedFields = new Map<String, String>();
		
		for(Schema.SObjectField f : objFields.values()) {
			localizedFields.put(f.getDescribe().getLocalName(), f.getDescribe().getName());
		}
		//for each, if there's a value in our incoming stuff, put it in the new one
		for(String key : localizedFields.keySet()){
			String fieldName = key;
			String namespacedName = localizedFields.get(key);
			if(dirtyMap.get(fieldName) != null){
				cleanMap.put(namespacedName, dirtyMap.get(fieldName));
			}
			if(dirtyMap.get(namespacedName) != null){
				cleanMap.put(namespacedName, dirtyMap.get(namespacedName));
			}
		}
		//get stringy with it.
		return JSON.serialize(cleanMap);
	}

}
