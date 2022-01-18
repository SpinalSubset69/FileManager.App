import Toast from "react-native-toast-message";

function success(title = 'title',message = 'success'){
    Toast.show({
        type: "success",
        text1: title,
        text2: message,
      });
}


function error(title = 'title',message = 'success'){    
    Toast.show({
        type: "error",
        text1: title,
        text2: message,
      });
}

export const showToast = {
    success: success,
    error:error
}
