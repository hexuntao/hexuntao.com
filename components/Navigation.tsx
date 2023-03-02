import { Navbar } from "nextra-theme-docs";

function Navigation(props: any) {
  // const leadingItem = props.items[0];
  // if (leadingItem?.id !== "contextual-docs") {
  //   props.items.unshift({
  //     title: "Docs",
  //     type: "page",
  //     route: `/docs`,
  //     id: "contextual-docs",
  //     key: "contextual-docs",
  //   });
  // }

  // const lastItem = props.items[props.items.length - 1];
  // if (lastItem?.id !== "contextual-enterprise") {
  //   props.items.push({
  //     title: "Enterprise",
  //     newWindow: true,
  //     // https://github.com/shuding/nextra/issues/1028
  //     route: "enterprise",
  //     href: `https://vercel.com/${"contact"}/turborepo?utm_source=turbo.build&utm_medium=referral&utm_campaign=header-enterpriseLink`,
  //     id: "contextual-enterprise",
  //     key: "contextual-enterprise",
  //   });
  // }

  // // remove the top level repo and pack links
  // const headerItems = props.items.filter((item) => {
  //   return item.name !== "repo" && item.name !== "pack";
  // });

  // items last to override the default
  return <Navbar {...props} />;
}

export default Navigation;
