import APIBase from "./APIBase"

const API = {
	GlobalAPI: {
		UnprotectedAPI: {
			HomePageAPI: {
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/home-page/retrieve`,
						})
					)
				}, 
			},
			ProjectPageAPI: {
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/project-page/retrieve/${props.id}`,
						})
					)
				}, 
			},
			AboutAPI: {
				ListAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/about/list`,
						})
					)
				}, 
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/about/retrieve/${props.id}`,
						})
					)
				}, 
			},
			ContactAPI: {
				ListAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/contact/list`,
						})
					)
				}, 
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/contact/retrieve/${props.id}`,
						})
					)
				}, 
			},
		},
		ProtectedAPI: {
			AuthenticatedAPI: {
				LoginAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/login`,
							data: props.data,
						})
					)
				},    
				RegisterAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/register`,
							data: props.data,
						})
					)
				}, 
				ForgotPasswordAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/forgot-password`,
							data: props.data,
						})
					)
				},    
				ResetPasswordAPI: (props) => {
					return (
						APIBase({
							method: "PUT",
							url: `/api/v1/user/reset-password/${props.token}`,
							data: props.data,
						})
					)
				},
			},
			AuthorisedAPI: {
				TopbarAPI: {
					ProfileAPI: {
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/user/profile-retrieve`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/user/profile-update`,
									data: props.data,
								})
							)
						}, 
						UpdatePasswordAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/user/profile-update-password`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/user/profile-delete`,
								})
							)
						}, 
					},
					NotificationListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/notification/list`,
							})
						)
					}, 
					Logout: {
						LogoutAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/user/logout`,
								})
							)
						},  
					},	
					OtherAPI: {
						RoleAPI: {
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/role/retrieve/${props.id}`,
									})
								)
							}, 
						},		
						MenuAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/menu/list`,
									})
								)
							}, 
						},				
					}
				},
				SidbarAPI: {
			
				},			
			},		
		},	
	},
}

export default API