import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Usuario",
        icon: Icons.User,
        items: [
          {
            title: "Profile",
            url: "/",
          },
        ],
      },
      // {
      //   title: "Prontuário",
      //   url: "/calendar",
      //   icon: Icons.Table,
      //   items: [],
      // },
      // {
      //   title: "Pages",
      //   icon: Icons.Alphabet,
      //   items: [
      //     {
      //       title: "Settings",
      //       url: "/pages/settings",
      //     },
      //   ],
      // },
    ],
  },
  {
    label: "OTHERS",
    items: [      
      {
        title: "Authentication",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
