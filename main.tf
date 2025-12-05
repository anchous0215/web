resource "kubernetes_pod_security_policy" "fail" {
  metadata {
    name = "terraform-example"
  }
  spec {
    privileged                 = false
    allow_privilege_escalation = true
    allowed_capabilities = ["NET_BIND_SERVICE"] //k8scaps2
  }
}
