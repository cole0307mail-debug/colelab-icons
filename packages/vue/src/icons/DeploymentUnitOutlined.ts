// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeploymentUnitOutlinedSvg from '@colelab/icons-svg/es/asn/DeploymentUnitOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeploymentUnitOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeploymentUnitOutlinedSvg }, slots);
  },
});
