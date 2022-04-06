classdef Enum_dataType < Simulink.IntEnumType    
	enumeration
		RCC_enuOK(0)
		RCC_enuNOK(1)
		RCC_enuPinError(2)
	end
	methods(Static)
		function retVal = getDefaultValue()
			retVal = Enum_dataType.RCC_enuOK;
		end	
	end
end	
