
import { MouseEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export function navigateToSection(
    event: MouseEvent,
    href: string,
    pathname: string,
    router: AppRouterInstance
  ): void {
    event.preventDefault();
    const targetId = href.replace("#", "");
  
    const scrollToTarget = () => {
      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    };
  
    if (pathname === "/") {
      scrollToTarget();
    } else {
      router.push("/");
  
      setTimeout(() => {
        scrollToTarget();
      }, 500);
    }
  }
  
